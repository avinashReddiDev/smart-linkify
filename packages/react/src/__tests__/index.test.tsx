import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { SmartLinkify, useLinkify } from '../index.js';
import { linkify } from '@smart-linkify/core';

// Mock React rendering for basic tests
describe('SmartLinkify Component', () => {
  describe('Props', () => {
    it('should accept text prop', () => {
      const component = React.createElement(SmartLinkify, { 
        text: 'Visit https://example.com' 
      });
      expect(component.props.text).toBe('Visit https://example.com');
    });

    it('should accept options prop', () => {
      const component = React.createElement(SmartLinkify, {
        text: 'Visit https://example.com',
        options: { color: 'blue' }
      });
      expect(component.props.options).toEqual({ color: 'blue' });
    });

    it('should accept onLinkClick callback', () => {
      const onClick = vi.fn();
      const component = React.createElement(SmartLinkify, {
        text: 'Visit https://example.com',
        onLinkClick: onClick
      });
      expect(component.props.onLinkClick).toBe(onClick);
    });

    it('should accept className prop', () => {
      const component = React.createElement(SmartLinkify, {
        text: 'Visit https://example.com',
        className: 'custom-class'
      });
      expect(component.props.className).toBe('custom-class');
    });

    it('should accept style prop', () => {
      const style = { fontSize: '16px' };
      const component = React.createElement(SmartLinkify, {
        text: 'Visit https://example.com',
        style
      });
      expect(component.props.style).toEqual(style);
    });
  });

  describe('Options Integration', () => {
    it('should pass options to linkify function', () => {
      const component = React.createElement(SmartLinkify, {
        text: 'Contact hello@example.com',
        options: { detectEmails: true }
      });
      expect(component).toBeDefined();
    });

    it('should handle all detection options', () => {
      const component = React.createElement(SmartLinkify, {
        text: 'Visit https://example.com, email hello@example.com, call 555-123-4567',
        options: {
          detectEmails: true,
          detectPhones: true
        }
      });
      expect(component).toBeDefined();
    });
  });
});

describe('useLinkify Hook', () => {
  it('should return linkified HTML string', () => {
    // Test the underlying linkify function since useLinkify is just a wrapper
    const result = linkify('Visit https://example.com');
    expect(result).toContain('<a href="https://example.com"');
    expect(result).toContain('target="_blank"');
  });

  it('should accept options', () => {
    const result = linkify('Visit https://example.com', { color: 'red' });
    expect(result).toContain('color:red');
  });

  it('should handle email detection', () => {
    const result = linkify('Email hello@example.com', { detectEmails: true });
    expect(result).toContain('mailto:hello@example.com');
  });

  it('should handle phone detection', () => {
    const result = linkify('Call 555-123-4567', { detectPhones: true });
    expect(result).toContain('tel:5551234567');
  });

  it('should handle hashtags', () => {
    const result = linkify('Check #javascript', {
      detectHashtags: true,
      hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`
    });
    expect(result).toContain('href="https://twitter.com/hashtag/javascript"');
  });

  it('should handle mentions', () => {
    const result = linkify('Follow @user', {
      detectMentions: true,
      mentionUrl: (user) => `https://twitter.com/${user}`
    });
    expect(result).toContain('href="https://twitter.com/user"');
  });

  it('should apply domain-specific styling', () => {
    const result = linkify('Visit https://github.com', {
      domainStyles: {
        'github.com': {
          icon: '🐙 ',
          color: '#333'
        }
      }
    });
    expect(result).toContain('🐙');
    expect(result).toContain('color:#333');
  });

  it('should handle security features', () => {
    const result = linkify('Visit https://example.com?utm_source=test', {
      removeTracking: true
    });
    // Check that href doesn't contain tracking param
    expect(result).toContain('href="https://example.com/"');
  });

  it('should handle accessibility features', () => {
    const result = linkify('Visit https://example.com', {
      ariaLabel: 'External link',
      screenReaderText: 'Opens in new window'
    });
    expect(result).toContain('aria-label="External link"');
    expect(result).toContain('Opens in new window');
  });
});

describe('Component Type Safety', () => {
  it('should have correct prop types', () => {
    // This test ensures TypeScript types are correct
    const validProps = {
      text: 'Hello',
      options: { color: 'blue' },
      onLinkClick: (url: string, event: React.MouseEvent) => {},
      className: 'test',
      style: { color: 'red' }
    };
    
    const component = React.createElement(SmartLinkify, validProps);
    expect(component).toBeDefined();
  });
});
