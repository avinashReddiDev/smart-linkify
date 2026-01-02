import React, { useCallback, useMemo } from "react";
import { linkify } from "@smart-linkify/core";
import type { LinkifyOptions } from "@smart-linkify/core";

interface Props {
  text: string;
  options?: LinkifyOptions | undefined;
  onLinkClick?: (url: string, event: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * React component that automatically converts URLs in text to clickable links
 * 
 * @example
 * ```tsx
 * <SmartLinkify text="Visit https://example.com" />
 * 
 * <SmartLinkify 
 *   text="Contact: hello@example.com" 
 *   options={{ detectEmails: true }} 
 * />
 * 
 * <SmartLinkify 
 *   text="Follow us @company #javascript" 
 *   options={{ detectHashtags: true, detectMentions: true }}
 *   onLinkClick={(url) => console.log('Clicked:', url)}
 * />
 * ```
 */
export function SmartLinkify({ 
  text, 
  options, 
  onLinkClick,
  className,
  style 
}: Props) {
  // Memoize the linkified HTML
  const linkifiedHtml = useMemo(() => {
    return linkify(text, options);
  }, [text, options]);

  // Handle click events
  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      const url = target.getAttribute('href');
      if (url && onLinkClick) {
        e.preventDefault();
        onLinkClick(url, e);
      }
    }
  }, [onLinkClick]);

  return (
    <span
      className={className}
      style={style}
      onClick={onLinkClick ? handleClick : undefined}
      dangerouslySetInnerHTML={{
        __html: linkifiedHtml
      }}
    />
  );
}

/**
 * Hook to linkify text and return HTML string
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const html = useLinkify("Visit https://example.com", { color: "blue" });
 *   return <div dangerouslySetInnerHTML={{ __html: html }} />;
 * };
 * ```
 */
export function useLinkify(text: string, options?: LinkifyOptions): string {
  return useMemo(() => linkify(text, options), [text, options]);
}
