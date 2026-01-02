import { describe, it, expect } from 'vitest';
import { linkify } from '../linkify.js';

describe('linkify - Basic URL Detection', () => {
  it('should linkify a simple URL with https', () => {
    const result = linkify('Visit https://example.com');
    expect(result).toContain('<a href="https://example.com"');
    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noopener noreferrer"');
  });

  it('should linkify a URL without protocol', () => {
    const result = linkify('Visit www.example.com');
    expect(result).toContain('<a href="https://www.example.com"');
    expect(result).toContain('www.example.com</a>');
  });

  it('should linkify multiple URLs in text', () => {
    const result = linkify('Check https://example.com and www.google.com');
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('href="https://www.google.com"');
  });

  it('should handle URLs with paths and query strings', () => {
    const result = linkify('Visit https://example.com/path?foo=bar&baz=qux');
    // HTML entities are escaped: & becomes &amp;
    expect(result).toContain('href="https://example.com/path?foo=bar&amp;baz=qux"');
  });

  it('should return empty string for empty input', () => {
    expect(linkify('')).toBe('');
    expect(linkify('   ')).toBe('   ');
  });

  it('should throw TypeError for non-string input', () => {
    // @ts-expect-error - Testing invalid input
    expect(() => linkify(123)).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input
    expect(() => linkify(null)).toThrow(TypeError);
  });
});

describe('linkify - Styling Options', () => {
  it('should apply custom color', () => {
    const result = linkify('Visit https://example.com', { color: 'red' });
    expect(result).toContain('color:red');
  });

  it('should remove underline when specified', () => {
    const result = linkify('Visit https://example.com', { underline: false });
    expect(result).toContain('text-decoration:none');
  });

  it('should add underline by default', () => {
    const result = linkify('Visit https://example.com');
    expect(result).toContain('text-decoration:underline');
  });

  it('should apply custom className', () => {
    const result = linkify('Visit https://example.com', { className: 'custom-link' });
    expect(result).toContain('class="custom-link"');
  });

  it('should set target to _self when specified', () => {
    const result = linkify('Visit https://example.com', { target: '_self' });
    expect(result).toContain('target="_self"');
    expect(result).not.toContain('rel="noopener noreferrer"');
  });
});

describe('linkify - Truncation', () => {
  const longUrl = 'https://example.com/very/long/path/that/exceeds/max/length';

  it('should truncate URL when maxLength is specified', () => {
    const result = linkify(`Visit ${longUrl}`, { maxLength: 20 });
    expect(result).toContain('...');
    expect(result).toContain('href="https://example.com/very/long/path/that/exceeds/max/length"');
  });

  it('should use end truncation strategy by default', () => {
    const result = linkify(`Visit ${longUrl}`, { maxLength: 20 });
    expect(result).toMatch(/https:\/\/example\.c\.\.\./);
  });

  it('should use middle truncation strategy', () => {
    const result = linkify(`Visit ${longUrl}`, { 
      maxLength: 30, 
      truncateStrategy: 'middle' 
    });
    expect(result).toContain('...');
  });

  it('should use smart truncation strategy', () => {
    const result = linkify(`Visit ${longUrl}`, { 
      maxLength: 20, 
      truncateStrategy: 'smart' 
    });
    expect(result).toContain('example.com');
  });

  it('should show tooltip when specified', () => {
    const result = linkify(`Visit ${longUrl}`, { 
      maxLength: 20, 
      showTooltip: true 
    });
    expect(result).toContain('title=');
  });
});

describe('linkify - Email Detection', () => {
  it('should linkify email addresses when detectEmails is true', () => {
    const result = linkify('Contact hello@example.com', { detectEmails: true });
    expect(result).toContain('href="mailto:hello@example.com"');
    expect(result).toContain('hello@example.com</a>');
  });

  it('should not linkify emails by default', () => {
    const result = linkify('Contact hello@example.com');
    expect(result).not.toContain('mailto:');
    expect(result).toBe('Contact hello@example.com');
  });

  it('should use custom email prefix', () => {
    const result = linkify('Contact hello@example.com', { 
      detectEmails: true, 
      emailPrefix: 'email:' 
    });
    expect(result).toContain('href="email:hello@example.com"');
  });

  it('should handle multiple email addresses', () => {
    const result = linkify('Contact hello@example.com or support@example.com', { 
      detectEmails: true 
    });
    expect(result).toContain('mailto:hello@example.com');
    expect(result).toContain('mailto:support@example.com');
  });
});

describe('linkify - Phone Detection', () => {
  it('should linkify phone numbers when detectPhones is true', () => {
    const result = linkify('Call 555-123-4567', { detectPhones: true });
    expect(result).toContain('href="tel:5551234567"');
  });

  it('should not linkify phones by default', () => {
    const result = linkify('Call 555-123-4567');
    expect(result).toBe('Call 555-123-4567');
  });

  it('should handle phone with parentheses', () => {
    const result = linkify('Call (555) 123-4567', { detectPhones: true });
    expect(result).toContain('href="tel:5551234567"');
  });

  it('should handle international phone format', () => {
    const result = linkify('Call +1-555-123-4567', { detectPhones: true });
    expect(result).toContain('href="tel:+15551234567"');
  });

  it('should use custom phone prefix', () => {
    const result = linkify('Call 555-123-4567', { 
      detectPhones: true, 
      phonePrefix: 'phone:' 
    });
    expect(result).toContain('href="phone:5551234567"');
  });
});

describe('linkify - Hashtag Detection', () => {
  it('should linkify hashtags when detectHashtags is true', () => {
    const result = linkify('Check out #javascript', {
      detectHashtags: true,
      hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`
    });
    expect(result).toContain('href="https://twitter.com/hashtag/javascript"');
    expect(result).toContain('#javascript</a>');
  });

  it('should not linkify hashtags by default', () => {
    const result = linkify('Check out #javascript');
    expect(result).toBe('Check out #javascript');
  });

  it('should handle multiple hashtags', () => {
    const result = linkify('Tags: #javascript #typescript #react', {
      detectHashtags: true,
      hashtagUrl: (tag) => `https://example.com/tag/${tag}`
    });
    expect(result).toContain('href="https://example.com/tag/javascript"');
    expect(result).toContain('href="https://example.com/tag/typescript"');
    expect(result).toContain('href="https://example.com/tag/react"');
  });
});

describe('linkify - Mention Detection', () => {
  it('should linkify mentions when detectMentions is true', () => {
    const result = linkify('Follow @username', {
      detectMentions: true,
      mentionUrl: (user) => `https://twitter.com/${user}`
    });
    expect(result).toContain('href="https://twitter.com/username"');
    expect(result).toContain('@username</a>');
  });

  it('should not linkify mentions by default', () => {
    const result = linkify('Follow @username');
    expect(result).toBe('Follow @username');
  });

  it('should handle multiple mentions', () => {
    const result = linkify('Follow @alice and @bob', {
      detectMentions: true,
      mentionUrl: (user) => `https://github.com/${user}`
    });
    expect(result).toContain('href="https://github.com/alice"');
    expect(result).toContain('href="https://github.com/bob"');
  });
});

describe('linkify - Security Features', () => {
  it('should block domains in blocklist', () => {
    const result = linkify('Visit https://malicious.com', {
      blocklist: ['malicious.com']
    });
    expect(result).toBe('Visit https://malicious.com');
    expect(result).not.toContain('<a');
  });

  it('should only allow domains in allowlist', () => {
    const result = linkify('Visit https://example.com and https://other.com', {
      allowlist: ['example.com']
    });
    expect(result).toContain('href="https://example.com"');
    expect(result).not.toContain('href="https://other.com"');
  });

  it('should remove tracking parameters when removeTracking is true', () => {
    const result = linkify('Visit https://example.com?utm_source=test&foo=bar', {
      removeTracking: true
    });
    // Href has tracking removed
    expect(result).toContain('href="https://example.com/?foo=bar"');
    // Display text still shows original URL (that's expected behavior)
  });

  it('should remove fbclid tracking parameter', () => {
    const result = linkify('Visit https://example.com?fbclid=abc123&foo=bar', {
      removeTracking: true
    });
    // Href has tracking removed
    expect(result).toContain('href="https://example.com/?foo=bar"');
    expect(result).toContain('foo=bar');
  });
});

describe('linkify - Domain-Specific Styling', () => {
  it('should apply domain-specific styles', () => {
    const result = linkify('Visit https://github.com', {
      domainStyles: {
        'github.com': {
          color: '#333',
          className: 'github-link'
        }
      }
    });
    expect(result).toContain('color:#333');
    expect(result).toContain('github-link');
  });

  it('should apply domain-specific icon', () => {
    const result = linkify('Visit https://github.com', {
      domainStyles: {
        'github.com': {
          icon: '🐙 '
        }
      }
    });
    expect(result).toContain('🐙');
  });

  it('should combine global and domain-specific styles', () => {
    const result = linkify('Visit https://github.com', {
      className: 'link',
      domainStyles: {
        'github.com': {
          className: 'github-link'
        }
      }
    });
    expect(result).toContain('class="link github-link');
  });
});

describe('linkify - Icons', () => {
  it('should add icon before link', () => {
    const result = linkify('Visit https://example.com', {
      iconBefore: '🔗 '
    });
    expect(result).toContain('🔗');
  });

  it('should add icon after link', () => {
    const result = linkify('Visit https://example.com', {
      iconAfter: ' ↗'
    });
    expect(result).toContain('↗');
  });

  it('should add icon class', () => {
    const result = linkify('Visit https://example.com', {
      iconBefore: '<i class="icon"></i>',
      iconClass: 'link-icon'
    });
    expect(result).toContain('link-icon');
  });
});

describe('linkify - Accessibility', () => {
  it('should add aria-label as string', () => {
    const result = linkify('Visit https://example.com', {
      ariaLabel: 'External link to example.com'
    });
    expect(result).toContain('aria-label="External link to example.com"');
  });

  it('should add aria-label from function', () => {
    const result = linkify('Visit https://example.com', {
      ariaLabel: (url) => `Link to ${url}`
    });
    expect(result).toContain('aria-label="Link to https://example.com"');
  });

  it('should add screen reader text', () => {
    const result = linkify('Visit https://example.com', {
      screenReaderText: 'Opens in new window'
    });
    expect(result).toContain('Opens in new window');
    expect(result).toContain('sr-only');
  });
});

describe('linkify - Callbacks', () => {
  it('should call onUrlDetected for each URL', () => {
    const urls: string[] = [];
    linkify('Visit https://example.com and https://google.com', {
      onUrlDetected: (url) => urls.push(url)
    });
    expect(urls).toContain('https://example.com');
    expect(urls).toContain('https://google.com');
  });
});

describe('linkify - XSS Prevention', () => {
  it('should escape HTML in display text', () => {
    const result = linkify('Visit https://example.com/<script>alert("xss")</script>');
    expect(result).not.toContain('<script>');
    expect(result).toContain('&lt;script&gt;');
  });

  it('should escape quotes in aria-label', () => {
    const result = linkify('Visit https://example.com', {
      ariaLabel: 'Link with "quotes"'
    });
    expect(result).toContain('&quot;');
  });
});

describe('linkify - Complex Scenarios', () => {
  it('should handle mixed content types', () => {
    const result = linkify('Visit https://example.com, email hello@example.com, call 555-123-4567, follow @user #hashtag', {
      detectEmails: true,
      detectPhones: true,
      detectMentions: true,
      detectHashtags: true,
      mentionUrl: (user) => `https://twitter.com/${user}`,
      hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`
    });
    
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('href="mailto:hello@example.com"');
    expect(result).toContain('href="tel:5551234567"');
    expect(result).toContain('href="https://twitter.com/user"');
    expect(result).toContain('href="https://twitter.com/hashtag/hashtag"');
  });

  it('should preserve non-URL text', () => {
    const result = linkify('Hello world, visit https://example.com for more info!');
    expect(result).toContain('Hello world, visit');
    expect(result).toContain('for more info!');
  });
});
