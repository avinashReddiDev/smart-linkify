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
    target: "_blank"
  },

  /**
   * Social preset - Styled with social media blue color
   */
  social: {
    color: "#1da1f2",
    underline: false
  },

  /**
   * Professional preset - Conservative styling for business content
   */
  professional: {
    color: "#0066cc",
    target: "_blank",
    underline: true
  },

  /**
   * Compact preset - Truncates long URLs for cleaner display
   */
  compact: {
    maxLength: 40,
    underline: false
  },

  /**
   * Inline preset - Subtle styling that blends with text
   */
  inline: {
    target: "_self",
    underline: false
  }
};

export default presets;
