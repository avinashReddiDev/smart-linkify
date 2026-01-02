import { describe, it, expect } from 'vitest';
import { linkify } from '../linkify.js';
import presets from '../presets.js';

describe('Presets', () => {
  describe('minimal preset', () => {
    it('should have no underline', () => {
      const result = linkify('Visit https://example.com', presets.minimal);
      expect(result).toContain('text-decoration:none');
    });
  });

  describe('secure preset', () => {
    it('should open in new tab', () => {
      const result = linkify('Visit https://example.com', presets.secure);
      expect(result).toContain('target="_blank"');
    });

    it('should remove tracking parameters', () => {
      const result = linkify('Visit https://example.com?utm_source=test', presets.secure);
      // Check that href doesn't contain tracking param
      expect(result).toContain('href="https://example.com/"');
    });
  });

  describe('social preset', () => {
    it('should have social media blue color', () => {
      const result = linkify('Visit https://example.com', presets.social);
      expect(result).toContain('color:#1da1f2');
    });

    it('should detect hashtags', () => {
      const result = linkify('Check #javascript', presets.social);
      expect(result).toContain('href="https://twitter.com/hashtag/javascript"');
    });

    it('should detect mentions', () => {
      const result = linkify('Follow @user', presets.social);
      expect(result).toContain('href="https://twitter.com/user"');
    });
  });

  describe('professional preset', () => {
    it('should have professional blue color', () => {
      const result = linkify('Visit https://example.com', presets.professional);
      expect(result).toContain('color:#0066cc');
    });

    it('should have underline', () => {
      const result = linkify('Visit https://example.com', presets.professional);
      expect(result).toContain('text-decoration:underline');
    });

    it('should open in new tab', () => {
      const result = linkify('Visit https://example.com', presets.professional);
      expect(result).toContain('target="_blank"');
    });
  });

  describe('compact preset', () => {
    it('should truncate long URLs', () => {
      const longUrl = 'https://example.com/very/long/path/that/should/be/truncated';
      const result = linkify(longUrl, presets.compact);
      expect(result).toContain('...');
    });

    it('should use smart truncation', () => {
      const result = linkify('https://example.com/path', presets.compact);
      expect(result).toBeDefined();
    });

    it('should show tooltip', () => {
      const result = linkify('https://example.com', presets.compact);
      expect(result).toContain('title=');
    });
  });

  describe('inline preset', () => {
    it('should open in same tab', () => {
      const result = linkify('Visit https://example.com', presets.inline);
      expect(result).toContain('target="_self"');
    });

    it('should have no underline', () => {
      const result = linkify('Visit https://example.com', presets.inline);
      expect(result).toContain('text-decoration:none');
    });
  });

  describe('email preset', () => {
    it('should detect emails', () => {
      const result = linkify('Contact hello@example.com', presets.email);
      expect(result).toContain('mailto:hello@example.com');
    });

    it('should remove tracking', () => {
      const result = linkify('Visit https://example.com?utm_source=test', presets.email);
      // Check that href doesn't contain tracking param
      expect(result).toContain('href="https://example.com/"');
    });

    it('should have aria-label', () => {
      const result = linkify('Visit https://example.com', presets.email);
      expect(result).toContain('aria-label=');
    });
  });

  describe('documentation preset', () => {
    it('should have document icon', () => {
      const result = linkify('Visit https://example.com', presets.documentation);
      expect(result).toContain('📄');
    });

    it('should show tooltip', () => {
      const result = linkify('Visit https://example.com', presets.documentation);
      expect(result).toContain('title=');
    });
  });

  describe('safe preset', () => {
    it('should have screen reader text', () => {
      const result = linkify('Visit https://example.com', presets.safe);
      expect(result).toContain('Opens in new window');
    });
  });

  describe('mobile preset', () => {
    it('should truncate for mobile', () => {
      const longUrl = 'https://example.com/very/long/path';
      const result = linkify(longUrl, presets.mobile);
      expect(result).toContain('...');
    });

    it('should detect phones', () => {
      const result = linkify('Call 555-123-4567', presets.mobile);
      expect(result).toContain('tel:');
    });

    it('should detect emails', () => {
      const result = linkify('Email hello@example.com', presets.mobile);
      expect(result).toContain('mailto:');
    });
  });

  describe('accessible preset', () => {
    it('should have aria-label', () => {
      const result = linkify('Visit https://example.com', presets.accessible);
      expect(result).toContain('aria-label=');
    });

    it('should have screen reader text', () => {
      const result = linkify('Visit https://example.com', presets.accessible);
      expect(result).toContain('Opens in new window');
    });

    it('should have underline', () => {
      const result = linkify('Visit https://example.com', presets.accessible);
      expect(result).toContain('text-decoration:underline');
    });
  });

  describe('contact preset', () => {
    it('should detect emails', () => {
      const result = linkify('Email hello@example.com', presets.contact);
      expect(result).toContain('mailto:');
    });

    it('should detect phones', () => {
      const result = linkify('Call 555-123-4567', presets.contact);
      expect(result).toContain('tel:');
    });

    it('should open in same tab', () => {
      const result = linkify('Visit https://example.com', presets.contact);
      expect(result).toContain('target="_self"');
    });
  });

  describe('github preset', () => {
    it('should have GitHub icon for github.com', () => {
      const result = linkify('Visit https://github.com', presets.github);
      expect(result).toContain('🐙');
    });

    it('should have dark color', () => {
      const result = linkify('Visit https://github.com', presets.github);
      expect(result).toContain('color:#24292f');
    });
  });

  describe('analytics preset', () => {
    it('should track clicks', () => {
      expect(presets.analytics?.trackClicks).toBe(true);
    });

    it('should not remove tracking parameters', () => {
      const result = linkify('Visit https://example.com?utm_source=test', presets.analytics);
      expect(result).toContain('utm_source=test');
    });
  });
});
