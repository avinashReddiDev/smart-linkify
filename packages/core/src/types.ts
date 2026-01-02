export interface DomainStyle {
  color?: string;
  icon?: string;
  className?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface LinkifyOptions {
  // Basic styling
  color?: string;
  target?: "_blank" | "_self";
  className?: string;
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
  maxLength?: number;
  rel?: string; // Default: 'noopener noreferrer'
  
  // Detection options
  detectEmails?: boolean;
  emailPrefix?: string; // Default: 'mailto:'
  emailSubject?: string; // Email subject line
  emailBody?: string; // Email body text
  emailDomainAllowlist?: string[]; // Only allow emails from these domains
  
  detectPhones?: boolean;
  phonePrefix?: string; // Default: 'tel:'
  phoneRegion?: string; // e.g., 'US', 'UK'
  phoneFormat?: string; // Format string like '(###) ###-####'
  phoneCountryCode?: string; // e.g., '+1', '+44'
  
  detectHashtags?: boolean;
  hashtagUrl?: (tag: string) => string;
  hashtagPrefix?: string; // Text/icon before hashtag
  hashtagColor?: string; // Color for hashtags
  
  detectMentions?: boolean;
  mentionUrl?: (username: string) => string;
  mentionPrefix?: string; // Text/icon before mention
  mentionColor?: string; // Color for mentions
  mentionAllowlist?: string[]; // Only linkify these mentions
  
  // Security & Privacy
  blocklist?: string[]; // Block specific domains
  allowlist?: string[]; // Only allow specific domains
  removeTracking?: boolean; // Strip UTM and tracking params
  sanitizeInput?: boolean; // Sanitize HTML input
  allowedTags?: string[]; // Allowed HTML tags when sanitizing
  
  // Customization
  iconBefore?: string;
  iconAfter?: string;
  iconClass?: string;
  domainStyles?: Record<string, DomainStyle>;
  customStyles?: Record<string, string | number>; // Custom CSS styles object
  
  // Truncation
  truncateStrategy?: 'middle' | 'end' | 'smart';
  truncateText?: string; // Text to show when truncated (default: '...')
  preserveDomain?: boolean;
  showTooltip?: boolean;
  showFullOnHover?: boolean; // Show full URL on hover
  
  // Accessibility
  ariaLabel?: string | ((url: string) => string);
  screenReaderText?: string;
  tabIndex?: number; // Tab index for keyboard navigation
  role?: string; // ARIA role attribute
  
  // Analytics & Events
  trackClicks?: boolean;
  onClick?: (url: string) => void;
  onUrlDetected?: (url: string) => void;
  onLinkClick?: (url: string, event: Event) => void;
  onLinkHover?: (url: string) => void;
  
  // Callbacks
  transformUrl?: (url: string) => string; // Transform URL before linkification
  beforeLinkify?: (url: string) => string | null; // Process/filter URL before linkification
  afterLinkify?: (html: string) => string; // Process HTML after linkification
  
  // Security & Performance
  /** Maximum input text length to prevent ReDoS attacks (default: 50000) */
  maxInputLength?: number;
  
  // Internationalization
  locale?: string;
  translations?: {
    opensInNewTab?: string;
    externalLink?: string;
    unsafeLink?: string;
  };
}
