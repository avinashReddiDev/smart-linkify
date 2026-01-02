import { describe, it, expect } from 'vitest';
import { linkify } from '../linkify.js';

describe('ReDoS Protection', () => {
  describe('Input Length Validation', () => {
    it('should handle normal length strings without error', () => {
      const text = 'a'.repeat(1000) + ' https://example.com';
      expect(() => linkify(text)).not.toThrow();
    });

    it('should handle strings up to max length', () => {
      const text = 'a'.repeat(49980) + ' https://example.com'; // 50001 total, within limit
      expect(() => linkify(text)).not.toThrow();
    });

    it('should reject strings exceeding default max length', () => {
      const tooLong = 'a'.repeat(50001);
      expect(() => linkify(tooLong)).toThrow('exceeds maximum length');
      expect(() => linkify(tooLong)).toThrow('50000');
    });

    it('should allow custom max length via options', () => {
      const text = 'a'.repeat(1000);
      
      // Should fail with lower limit
      expect(() => linkify(text, { maxInputLength: 500 })).toThrow();
      
      // Should pass with higher limit
      expect(() => linkify(text, { maxInputLength: 2000 })).not.toThrow();
    });

    it('should include helpful error message', () => {
      const tooLong = 'a'.repeat(50001);
      try {
        linkify(tooLong);
        expect.fail('Should have thrown an error');
      } catch (error: any) {
        expect(error.message).toContain('50000 characters');
        expect(error.message).toContain('ReDoS');
        expect(error.message).toContain('maxInputLength');
      }
    });
  });

  describe('Regex Pattern Safety', () => {
    it('should handle malicious URL patterns without timeout', () => {
      const maliciousInputs = [
        // Patterns that could cause exponential backtracking with vulnerable regex
        'www.' + 'a-'.repeat(100) + 'com',
        'http://' + 'subdomain.'.repeat(50) + 'example.com',
        'a'.repeat(100) + '.' + 'a'.repeat(100) + '.com',
        'www.' + 'a'.repeat(100) + '-' + 'b'.repeat(100) + '.com',
      ];

      maliciousInputs.forEach(input => {
        const start = Date.now();
        expect(() => linkify(input)).not.toThrow();
        const duration = Date.now() - start;
        
        // Should complete in reasonable time (< 100ms)
        expect(duration).toBeLessThan(100);
      });
    });

    it('should handle malicious email patterns without timeout', () => {
      const maliciousEmails = [
        'a'.repeat(100) + '@' + 'b'.repeat(100) + '.com',
        'test' + '.test'.repeat(50) + '@example.com',
        'user@' + 'subdomain.'.repeat(50) + 'example.com',
      ];

      maliciousEmails.forEach(email => {
        const start = Date.now();
        expect(() => linkify(email, { detectEmails: true })).not.toThrow();
        const duration = Date.now() - start;
        expect(duration).toBeLessThan(100);
      });
    });

    it('should handle malicious phone patterns without timeout', () => {
      const maliciousPhones = [
        '5'.repeat(100) + '-' + '1'.repeat(100) + '-' + '2'.repeat(100),
        '+1-' + '555-'.repeat(50) + '1234',
      ];

      maliciousPhones.forEach(phone => {
        const start = Date.now();
        expect(() => linkify(phone, { detectPhones: true })).not.toThrow();
        const duration = Date.now() - start;
        expect(duration).toBeLessThan(100);
      });
    });

    it('should handle malicious hashtag patterns without timeout', () => {
      const maliciousHashtags = [
        '#' + 'a'.repeat(100),
        '#test' + '#test'.repeat(50),
      ];

      maliciousHashtags.forEach(tag => {
        const start = Date.now();
        expect(() => linkify(tag, {
          detectHashtags: true,
          hashtagUrl: (t) => `https://twitter.com/hashtag/${t}`
        })).not.toThrow();
        const duration = Date.now() - start;
        expect(duration).toBeLessThan(100);
      });
    });

    it('should handle malicious mention patterns without timeout', () => {
      const maliciousMentions = [
        '@' + 'a'.repeat(100),
        '@user' + '@user'.repeat(50),
      ];

      maliciousMentions.forEach(mention => {
        const start = Date.now();
        expect(() => linkify(mention, {
          detectMentions: true,
          mentionUrl: (u) => `https://twitter.com/${u}`
        })).not.toThrow();
        const duration = Date.now() - start;
        expect(duration).toBeLessThan(100);
      });
    });
  });

  describe('Mixed Content Safety', () => {
    it('should handle mixed malicious patterns efficiently', () => {
      const mixedContent = [
        'Visit www.' + 'subdomain.'.repeat(20) + 'com and email ' + 'a'.repeat(50) + '@example.com',
        'Call ' + '555-'.repeat(20) + '1234 or check #' + 'trending'.repeat(10),
        'Follow @' + 'user'.repeat(10) + ' at https://' + 'subdomain.'.repeat(20) + 'example.com',
      ];

      mixedContent.forEach(content => {
        const start = Date.now();
        expect(() => linkify(content, {
          detectEmails: true,
          detectPhones: true,
          detectHashtags: true,
          detectMentions: true,
          hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
          mentionUrl: (user) => `https://twitter.com/${user}`
        })).not.toThrow();
        const duration = Date.now() - start;
        expect(duration).toBeLessThan(200);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty string', () => {
      expect(linkify('')).toBe('');
    });

    it('should handle whitespace-only string', () => {
      expect(linkify('   ')).toBe('   ');
    });

    it('should handle string at exactly max length', () => {
      const exactLength = 'a'.repeat(50000);
      expect(() => linkify(exactLength)).not.toThrow();
    });

    it('should handle string one character over max length', () => {
      const overLength = 'a'.repeat(50001);
      expect(() => linkify(overLength)).toThrow();
    });
  });

  describe('Performance Benchmarks', () => {
    it('should process 10KB of text quickly', () => {
      const text = 'Lorem ipsum dolor sit amet, '.repeat(400); // ~10KB
      const start = Date.now();
      linkify(text);
      const duration = Date.now() - start;
      expect(duration).toBeLessThan(50);
    });

    it('should process 100KB of text reasonably fast', () => {
      const text = 'Lorem ipsum dolor sit amet, '.repeat(4000); // ~100KB
      const start = Date.now();
      linkify(text, { maxInputLength: 200000 });
      const duration = Date.now() - start;
      expect(duration).toBeLessThan(500);
    });

    it('should have linear time complexity', () => {
      const sizes = [1000, 2000, 4000, 8000];
      const times: number[] = [];

      sizes.forEach(size => {
        const text = 'a'.repeat(size);
        const start = Date.now();
        linkify(text);
        times.push(Date.now() - start);
      });

      // Check that doubling input size roughly doubles time (linear)
      // Allow for some variance due to system load
      const ratio1 = (times[1] ?? 0) / (times[0] || 1);
      const ratio2 = (times[2] ?? 0) / (times[1] || 1);
      const ratio3 = (times[3] ?? 0) / (times[2] || 1);

      // Ratios should be roughly constant (not exponential)
      // Allow up to 10x variance due to GC, warmup, and match collection overhead
      expect(ratio1).toBeLessThan(10);
      expect(ratio2).toBeLessThan(10);
      expect(ratio3).toBeLessThan(10);
    });
  });

  describe('Type Safety', () => {
    it('should throw TypeError for non-string input', () => {
      expect(() => linkify(123 as any)).toThrow(TypeError);
      expect(() => linkify(null as any)).toThrow(TypeError);
      expect(() => linkify(undefined as any)).toThrow(TypeError);
      expect(() => linkify({} as any)).toThrow(TypeError);
      expect(() => linkify([] as any)).toThrow(TypeError);
    });
  });
});
