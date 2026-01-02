import type { LinkifyOptions } from "./types.js";

const URL_REGEX =
  /((https?:\/\/)?([\w-]+\.)+[a-z]{2,})(\/\S*)?/gi;

/**
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

  // Return early for empty strings
  if (!text || text.trim().length === 0) {
    return text;
  }

  return text.replace(URL_REGEX, (url) => {
    // Ensure URL has protocol
    const href = url.startsWith("http") ? url : `https://${url}`;

    // Handle max length truncation
    let displayText = url;
    if (options.maxLength && url.length > options.maxLength) {
      displayText = url.slice(0, options.maxLength) + "...";
    }

    // Escape HTML in display text to prevent XSS
    displayText = displayText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // Build style string
    const styles = [
      `color:${options.color ?? "inherit"}`,
      `text-decoration:${options.underline === false ? "none" : "underline"}`
    ].join(";");

    // Build class attribute
    const classAttr = options.className ? ` class="${options.className}"` : "";

    // Build target attribute
    const targetAttr = ` target="${options.target ?? "_blank"}"`;

    // Add rel attribute for security when opening in new tab
    const relAttr = options.target === "_blank" || !options.target
      ? ' rel="noopener noreferrer"'
      : "";

    return `<a href="${href}"${targetAttr}${relAttr}${classAttr} style="${styles}">${displayText}</a>`;
  });
}
