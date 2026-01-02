import type { LinkifyOptions } from "./types.js";

/**
 * Maximum input length to prevent ReDoS (Regular Expression Denial of Service) attacks
 * Can be overridden per-call via options.maxInputLength
 */
const MAX_INPUT_LENGTH = 50000;

/**
 * Secure regex patterns that avoid catastrophic backtracking
 * These patterns are designed to have linear time complexity
 * URL_REGEX uses negative lookbehind to avoid matching domains in emails
 * Bounded repetition prevents ReDoS attacks
 */
const URL_REGEX = /(?<![@\w])(?:https?:\/\/)?(?:www\.)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]{0,2000})?(?:\?[^\s]{0,1000})?/gi;
const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const PHONE_REGEX = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
const HASHTAG_REGEX = /#[a-zA-Z0-9_]{1,30}\b/g;
const MENTION_REGEX = /@[a-zA-Z0-9_]{1,15}\b/g;

/**
 * Extract domain from URL
 */
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    return urlObj.hostname;
  } catch {
    return '';
  }
}

/**
 * Check if domain is blocked or not in allowlist
 */
function isDomainAllowed(domain: string, options: LinkifyOptions): boolean {
  if (options.blocklist?.some(blocked => domain.includes(blocked))) {
    return false;
  }
  if (options.allowlist && !options.allowlist.some(allowed => domain.includes(allowed))) {
    return false;
  }
  return true;
}

/**
 * Remove tracking parameters from URL
 */
function removeTrackingParams(url: string): string {
  try {
    const urlObj = new URL(url);
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'fbclid', 'gclid', 'msclkid', 'mc_cid', 'mc_eid'
    ];
    trackingParams.forEach(param => urlObj.searchParams.delete(param));
    return urlObj.toString();
  } catch {
    return url;
  }
}

/**
 * Format phone number according to format string
 * Format string uses # as placeholder for digits
 * Example: "(###) ###-####" formats 5551234567 as (555) 123-4567
 */
function formatPhoneNumber(phone: string, format: string): string {
  const digits = phone.replace(/\D/g, '');
  let formatted = '';
  let digitIndex = 0;
  
  for (let i = 0; i < format.length && digitIndex < digits.length; i++) {
    if (format[i] === '#') {
      formatted += digits[digitIndex];
      digitIndex++;
    } else {
      formatted += format[i];
    }
  }
  
  // Add remaining digits if any
  while (digitIndex < digits.length) {
    formatted += digits[digitIndex];
    digitIndex++;
  }
  
  return formatted;
}

/**
 * Truncate text based on strategy with custom marker
 */
function truncateTextWithCustomMarker(text: string, maxLength: number, strategy: 'middle' | 'end' | 'smart' = 'end', marker: string = '...'): string {
  if (text.length <= maxLength) return text;
  
  const markerLength = marker.length;
  
  switch (strategy) {
    case 'middle': {
      const partLength = Math.floor((maxLength - markerLength) / 2);
      return text.slice(0, partLength) + marker + text.slice(-partLength);
    }
    case 'smart': {
      // Try to keep domain visible
      const domain = extractDomain(text);
      if (domain && domain.length < maxLength - markerLength) {
        return domain + marker;
      }
      return text.slice(0, maxLength - markerLength) + marker;
    }
    case 'end':
    default:
      return text.slice(0, maxLength - markerLength) + marker;
  }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Build HTML anchor tag
 */
function buildLink(href: string, displayText: string, options: LinkifyOptions, type: 'url' | 'email' | 'phone' | 'hashtag' | 'mention' = 'url'): string {
  const domain = extractDomain(href);
  const domainStyle = options.domainStyles?.[domain];
  
  // Determine color based on type
  let color = options.color || 'inherit';
  if (type === 'hashtag' && options.hashtagColor) {
    color = options.hashtagColor;
  } else if (type === 'mention' && options.mentionColor) {
    color = options.mentionColor;
  } else if (domainStyle?.color) {
    color = domainStyle.color;
  }
  
  // Build style string
  const styles: string[] = [];
  styles.push(`color:${color}`);
  
  // Text decoration
  const underline = (options.underline !== false && domainStyle?.underline !== false);
  if (underline) {
    styles.push('text-decoration:underline');
  } else {
    styles.push('text-decoration:none');
  }
  
  // Font weight
  if (options.bold || domainStyle?.bold) {
    styles.push('font-weight:bold');
  }
  
  // Font style
  if (options.italic || domainStyle?.italic) {
    styles.push('font-style:italic');
  }
  
  // Custom styles
  if (options.customStyles) {
    for (const [key, value] of Object.entries(options.customStyles)) {
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styles.push(`${cssKey}:${value}`);
    }
  }
  
  const styleAttr = styles.length > 0 ? ` style="${styles.join(';')}"` : '';
  
  // Build class attribute
  const classes = [
    options.className,
    domainStyle?.className,
    options.iconClass
  ].filter(Boolean).join(' ');
  const classAttr = classes ? ` class="${classes}"` : '';
  
  // Build target attribute
  const targetAttr = ` target="${options.target ?? "_blank"}"`;
  
  // Build rel attribute
  const relValue = options.rel || (options.target === "_blank" || !options.target ? 'noopener noreferrer' : '');
  const relAttr = relValue ? ` rel="${relValue}"` : '';
  
  // Build aria-label
  const ariaLabel = typeof options.ariaLabel === 'function' 
    ? options.ariaLabel(href) 
    : options.ariaLabel;
  const ariaAttr = ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : '';
  
  // Build role attribute
  const roleAttr = options.role ? ` role="${options.role}"` : '';
  
  // Build tabindex attribute
  const tabIndexAttr = options.tabIndex !== undefined ? ` tabindex="${options.tabIndex}"` : '';
  
  // Build title/tooltip
  let titleText = '';
  if (options.showTooltip || options.showFullOnHover) {
    titleText = href;
  }
  const titleAttr = titleText ? ` title="${escapeHtml(titleText)}"` : '';
  
  // Build icons and prefixes
  let iconBefore = domainStyle?.icon || options.iconBefore || '';
  let iconAfter = options.iconAfter || '';
  
  // Add type-specific prefixes
  if (type === 'hashtag' && options.hashtagPrefix) {
    iconBefore = options.hashtagPrefix + iconBefore;
  } else if (type === 'mention' && options.mentionPrefix) {
    iconBefore = options.mentionPrefix + iconBefore;
  }
  
  // Screen reader text
  const srText = options.screenReaderText 
    ? `<span class="sr-only">${escapeHtml(options.screenReaderText)}</span>` 
    : '';
  
  // Escape href to prevent XSS
  const escapedHref = escapeHtml(href);

  return `${iconBefore}<a href="${escapedHref}"${targetAttr}${relAttr}${classAttr}${ariaAttr}${roleAttr}${tabIndexAttr}${titleAttr}${styleAttr}>${displayText}</a>${srText}${iconAfter}`;
}/**
 * Converts URLs in text to clickable HTML anchor tags
 * @param text - The input text containing URLs to linkify
 * @param options - Optional configuration for link styling and behavior
 * @returns HTML string with linkified URLs
 * @throws {TypeError} if text is not a string
 * 
 * @example
 * ```typescript
 * linkify("Visit https://example.com");
 * // Returns: Visit <a href="https://example.com" target="_blank">https://example.com</a>
 * 
 * linkify("Check www.example.com", { color: "blue" });
 * // Returns: Check <a href="https://www.example.com" target="_blank" style="color:blue;...">www.example.com</a>
 * 
 * linkify("Email: hello@example.com", { detectEmails: true });
 * // Returns: Email: <a href="mailto:hello@example.com">hello@example.com</a>
 * ```
 */
export function linkify(
  text: string,
  options: LinkifyOptions = {}
): string {
  // Input validation
  if (typeof text !== "string") {
    throw new TypeError(
      `Expected text to be a string, but received ${typeof text}`
    );
  }

  // Prevent ReDoS attacks by limiting input length
  const maxLength = options.maxInputLength ?? MAX_INPUT_LENGTH;
  if (text.length > maxLength) {
    throw new Error(
      `Input text exceeds maximum length of ${maxLength} characters. This protects against ReDoS attacks. ` +
      `Configure a higher limit via options.maxInputLength if needed.`
    );
  }

  // Return early for empty strings
  if (!text || text.trim().length === 0) {
    return text;
  }

  // Sanitize input if requested
  let processedText = text;
  if (options.sanitizeInput) {
    processedText = escapeHtml(text);
    // If allowed tags specified, selectively allow them
    if (options.allowedTags && options.allowedTags.length > 0) {
      options.allowedTags.forEach(tag => {
        const openTag = new RegExp(`&lt;${tag}(&gt;|\\s[^&]*&gt;)`, 'gi');
        const closeTag = new RegExp(`&lt;/${tag}&gt;`, 'gi');
        processedText = processedText.replace(openTag, (match) => match.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
        processedText = processedText.replace(closeTag, `</${tag}>`);
      });
    }
  }

  // Apply beforeLinkify callback to entire text if provided
  if (options.beforeLinkify && typeof options.beforeLinkify === 'function') {
    const result = options.beforeLinkify(processedText);
    if (result === null) {
      // Skip linkification
      return processedText;
    }
    processedText = result;
  }

  // Collect all matches with their positions
  interface Match {
    start: number;
    end: number;
    text: string;
    replacement: string;
    priority: number;
  }

  const matches: Match[] = [];

  // Process URLs (priority 4 - lowest)
  URL_REGEX.lastIndex = 0;
  let urlMatch;
  while ((urlMatch = URL_REGEX.exec(processedText)) !== null) {
    let url = urlMatch[0];
    let href = url.startsWith("http") ? url : `https://${url}`;
    
    // Check domain blocklist/allowlist
    const domain = extractDomain(href);
    if (!isDomainAllowed(domain, options)) {
      continue;
    }
    
    // Apply transformUrl callback
    if (options.transformUrl && typeof options.transformUrl === 'function') {
      href = options.transformUrl(href);
    }
    
    // Remove tracking parameters
    if (options.removeTracking) {
      href = removeTrackingParams(href);
    }
    
    // Trigger onUrlDetected callback
    if (options.onUrlDetected) {
      options.onUrlDetected(href);
    }

    // Handle truncation
    let displayText = url;
    if (options.maxLength && url.length > options.maxLength) {
      const truncateText = options.truncateText || '...';
      displayText = truncateTextWithCustomMarker(
        url, 
        options.maxLength, 
        options.truncateStrategy || 'end',
        truncateText
      );
    }
    
    displayText = escapeHtml(displayText);
    const replacement = buildLink(href, displayText, options, 'url');

    matches.push({
      start: urlMatch.index,
      end: urlMatch.index + url.length,
      text: url,
      replacement,
      priority: 4
    });
  }

  // Process emails (priority 1 - highest)
  if (options.detectEmails) {
    EMAIL_REGEX.lastIndex = 0;
    let emailMatch;
    while ((emailMatch = EMAIL_REGEX.exec(processedText)) !== null) {
      const email = emailMatch[0];
      
      // Check email domain allowlist
      if (options.emailDomainAllowlist && options.emailDomainAllowlist.length > 0) {
        const parts = email.split('@');
        const emailDomain = parts.length > 1 ? parts[1] : '';
        if (!emailDomain || !options.emailDomainAllowlist.includes(emailDomain)) {
          continue;
        }
      }
      
      let href = `${options.emailPrefix || 'mailto:'}${email}`;
      
      // Add subject and body if provided
      const params: string[] = [];
      if (options.emailSubject) {
        params.push(`subject=${encodeURIComponent(options.emailSubject)}`);
      }
      if (options.emailBody) {
        params.push(`body=${encodeURIComponent(options.emailBody)}`);
      }
      if (params.length > 0) {
        href += `?${params.join('&')}`;
      }
      
      const displayText = escapeHtml(email);
      const replacement = buildLink(href, displayText, { ...options, target: '_self' }, 'email');

      matches.push({
        start: emailMatch.index,
        end: emailMatch.index + email.length,
        text: email,
        replacement,
        priority: 1
      });
    }
  }

  // Process phone numbers (priority 2)
  if (options.detectPhones) {
    PHONE_REGEX.lastIndex = 0;
    let phoneMatch;
    while ((phoneMatch = PHONE_REGEX.exec(processedText)) !== null) {
      let phone = phoneMatch[0];
      let cleanPhone = phone.replace(/[\s\-\.()]/g, '');
      
      // Add country code if provided
      if (options.phoneCountryCode && !cleanPhone.startsWith('+')) {
        cleanPhone = options.phoneCountryCode + cleanPhone;
      }
      
      const href = `${options.phonePrefix || 'tel:'}${cleanPhone}`;
      
      // Format phone number if format provided
      let displayPhone = phone;
      if (options.phoneFormat) {
        displayPhone = formatPhoneNumber(cleanPhone, options.phoneFormat);
      }
      
      const displayText = escapeHtml(displayPhone);
      const replacement = buildLink(href, displayText, { ...options, target: '_self' }, 'phone');

      matches.push({
        start: phoneMatch.index,
        end: phoneMatch.index + phone.length,
        text: phone,
        replacement,
        priority: 2
      });
    }
  }

  // Process hashtags (priority 3)
  if (options.detectHashtags && options.hashtagUrl) {
    HASHTAG_REGEX.lastIndex = 0;
    let hashtagMatch;
    while ((hashtagMatch = HASHTAG_REGEX.exec(processedText)) !== null) {
      const match = hashtagMatch[0];
      const tag = match.slice(1); // Remove # prefix
      const href = options.hashtagUrl(tag);
      const displayText = escapeHtml(match);
      const replacement = buildLink(href, displayText, options, 'hashtag');

      matches.push({
        start: hashtagMatch.index,
        end: hashtagMatch.index + match.length,
        text: match,
        replacement,
        priority: 3
      });
    }
  }

  // Process mentions (priority 3)
  if (options.detectMentions && options.mentionUrl) {
    MENTION_REGEX.lastIndex = 0;
    let mentionMatch;
    while ((mentionMatch = MENTION_REGEX.exec(processedText)) !== null) {
      const match = mentionMatch[0];
      const username = match.slice(1); // Remove @ prefix
      
      // Check mention allowlist
      if (options.mentionAllowlist && options.mentionAllowlist.length > 0) {
        if (!options.mentionAllowlist.includes(username)) {
          continue;
        }
      }
      
      const href = options.mentionUrl(username);
      const displayText = escapeHtml(match);
      const replacement = buildLink(href, displayText, options, 'mention');

      matches.push({
        start: mentionMatch.index,
        end: mentionMatch.index + match.length,
        text: match,
        replacement,
        priority: 3
      });
    }
  }

  // Sort by priority (lower number = higher priority), then by start position
  matches.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return a.start - b.start;
  });

  // Remove overlapping matches (keep higher priority ones)
  const filteredMatches: Match[] = [];
  for (const match of matches) {
    const overlaps = filteredMatches.some(
      existing => 
        (match.start >= existing.start && match.start < existing.end) ||
        (match.end > existing.start && match.end <= existing.end) ||
        (match.start <= existing.start && match.end >= existing.end)
    );
    if (!overlaps) {
      filteredMatches.push(match);
    }
  }

  // Sort by start position for replacement
  filteredMatches.sort((a, b) => a.start - b.start);

  // Build result by replacing matches
  if (filteredMatches.length === 0) {
    return processedText;
  }

  let result = '';
  let lastIndex = 0;

  for (const match of filteredMatches) {
    // Add text before match
    result += processedText.substring(lastIndex, match.start);
    // Add replacement
    result += match.replacement;
    // Update last index
    lastIndex = match.end;
  }

  // Add remaining text
  result += processedText.substring(lastIndex);

  // Apply afterLinkify callback if provided
  if (options.afterLinkify && typeof options.afterLinkify === 'function') {
    result = options.afterLinkify(result);
  }

  return result;
}
