import type { LinkifyOptions } from "./types.js";

/**
 * Pre-configured option sets for common linkify use cases
 */
const presets: Record<string, LinkifyOptions> = {
  /**
   * Minimal preset - Clean look without underlines
   */
  minimal: {
    underline: false
  },

  /**
   * Secure preset - Always opens links in new tab with security measures
   */
  secure: {
    target: "_blank",
    removeTracking: true
  },

  /**
   * Social preset - Styled with social media blue color
   */
  social: {
    color: "#1da1f2",
    underline: false,
    detectHashtags: true,
    detectMentions: true,
    hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
    mentionUrl: (username) => `https://twitter.com/${username}`
  },

  /**
   * Professional preset - Conservative styling for business content
   */
  professional: {
    color: "#0066cc",
    target: "_blank",
    underline: true,
    removeTracking: true
  },

  /**
   * Compact preset - Truncates long URLs for cleaner display
   */
  compact: {
    maxLength: 40,
    underline: false,
    truncateStrategy: "smart",
    showTooltip: true
  },

  /**
   * Inline preset - Subtle styling that blends with text
   */
  inline: {
    target: "_self",
    underline: false
  },

  /**
   * Email preset - For email content with tracking removal
   */
  email: {
    target: "_blank",
    color: "#0066cc",
    removeTracking: true,
    detectEmails: true,
    ariaLabel: (url) => `Link to ${url}`
  },

  /**
   * Documentation preset - For technical documentation
   */
  documentation: {
    underline: false,
    target: "_blank",
    color: "#0969da",
    iconAfter: " 📄",
    showTooltip: true
  },

  /**
   * Safe preset - With security checks and warnings
   */
  safe: {
    target: "_blank",
    removeTracking: true,
    screenReaderText: "Opens in new window"
  },

  /**
   * Mobile preset - Optimized for mobile devices
   */
  mobile: {
    maxLength: 30,
    underline: false,
    truncateStrategy: "smart",
    showTooltip: true,
    detectPhones: true,
    detectEmails: true
  },

  /**
   * Accessible preset - Maximum accessibility features
   */
  accessible: {
    ariaLabel: (url) => `Link to ${url}`,
    screenReaderText: "Opens in new window",
    target: "_blank",
    underline: true
  },

  /**
   * Contact preset - For contact information
   */
  contact: {
    detectEmails: true,
    detectPhones: true,
    target: "_self",
    color: "#0066cc"
  },

  /**
   * GitHub preset - Styled for GitHub links
   */
  github: {
    color: "#24292f",
    target: "_blank",
    domainStyles: {
      "github.com": {
        icon: "🐙 ",
        color: "#24292f"
      }
    }
  },

  /**
   * Analytics preset - With click tracking
   */
  analytics: {
    trackClicks: true,
    removeTracking: false,
    target: "_blank"
  }
};

export default presets;
