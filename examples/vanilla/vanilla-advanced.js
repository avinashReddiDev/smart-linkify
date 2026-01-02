// Comprehensive vanilla JavaScript examples for Smart Linkify
import { linkify, presets } from '@smart-linkify/core';

console.log('🔗 Smart Linkify - Vanilla JavaScript Examples\n');

// Example 1: Basic usage
console.log('=== 1. Basic Usage ===');
const basic = linkify('Visit https://example.com');
console.log(basic, '\n');

// Example 2: Custom styling
console.log('=== 2. Custom Styling ===');
const styled = linkify('Check out www.github.com', {
  color: '#0066cc',
  className: 'custom-link',
  underline: false
});
console.log(styled, '\n');

// Example 3: Email detection
console.log('=== 3. Email Detection ===');
const email = linkify('Contact us at hello@example.com', {
  detectEmails: true
});
console.log(email, '\n');

// Example 4: Phone detection
console.log('=== 4. Phone Detection ===');
const phone = linkify('Call us at (555) 123-4567', {
  detectPhones: true
});
console.log(phone, '\n');

// Example 5: Hashtags
console.log('=== 5. Hashtag Detection ===');
const hashtags = linkify('Check out #javascript and #typescript', {
  detectHashtags: true,
  hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`
});
console.log(hashtags, '\n');

// Example 6: Mentions
console.log('=== 6. Mention Detection ===');
const mentions = linkify('Follow @github and @npmjs', {
  detectMentions: true,
  mentionUrl: (user) => `https://twitter.com/${user}`
});
console.log(mentions, '\n');

// Example 7: Remove tracking
console.log('=== 7. Remove Tracking Parameters ===');
const noTracking = linkify('Visit https://example.com?utm_source=test&foo=bar', {
  removeTracking: true
});
console.log(noTracking, '\n');

// Example 8: Blocklist
console.log('=== 8. Domain Blocklist ===');
const blocked = linkify('Good: https://example.com, Bad: https://spam.com', {
  blocklist: ['spam.com']
});
console.log(blocked, '\n');

// Example 9: Domain-specific styling
console.log('=== 9. Domain-Specific Styling ===');
const domainStyle = linkify('Visit https://github.com and https://npmjs.com', {
  domainStyles: {
    'github.com': { icon: '🐙 ', color: '#24292f' },
    'npmjs.com': { icon: '📦 ', color: '#CB3837' }
  }
});
console.log(domainStyle, '\n');

// Example 10: Truncation strategies
console.log('=== 10. Truncation Strategies ===');
const longUrl = 'https://example.com/very/long/path/that/needs/truncation';

console.log('End:', linkify(longUrl, { maxLength: 30, truncateStrategy: 'end' }));
console.log('Middle:', linkify(longUrl, { maxLength: 30, truncateStrategy: 'middle' }));
console.log('Smart:', linkify(longUrl, { maxLength: 30, truncateStrategy: 'smart' }), '\n');

// Example 11: Icons
console.log('=== 11. Icons ===');
const icons = linkify('Visit https://example.com', {
  iconBefore: '🔗 ',
  iconAfter: ' ↗'
});
console.log(icons, '\n');

// Example 12: Accessibility
console.log('=== 12. Accessibility Features ===');
const accessible = linkify('Visit https://example.com', {
  ariaLabel: (url) => `Link to ${url}`,
  screenReaderText: 'Opens in new window'
});
console.log(accessible, '\n');

// Example 13: Callbacks
console.log('=== 13. URL Detection Callback ===');
const urls = [];
linkify('Visit https://example.com and https://google.com', {
  onUrlDetected: (url) => urls.push(url)
});
console.log('Detected URLs:', urls, '\n');

// Example 14: Social preset
console.log('=== 14. Social Preset ===');
const social = linkify('Follow @user on twitter.com #javascript', presets.social);
console.log(social, '\n');

// Example 15: Professional preset
console.log('=== 15. Professional Preset ===');
const professional = linkify('Visit https://example.com', presets.professional);
console.log(professional, '\n');

// Example 16: GitHub preset
console.log('=== 16. GitHub Preset ===');
const github = linkify('Star us on https://github.com/example/repo', presets.github);
console.log(github, '\n');

// Example 17: Contact preset
console.log('=== 17. Contact Preset ===');
const contact = linkify('Email: hello@example.com, Phone: 555-123-4567', presets.contact);
console.log(contact, '\n');

// Example 18: Mobile preset
console.log('=== 18. Mobile Preset ===');
const mobile = linkify('Call 555-123-4567 or visit https://example.com/long/url', presets.mobile);
console.log(mobile, '\n');

// Example 19: Documentation preset
console.log('=== 19. Documentation Preset ===');
const docs = linkify('See docs at https://docs.example.com', presets.documentation);
console.log(docs, '\n');

// Example 20: Accessible preset
console.log('=== 20. Accessible Preset ===');
const accessiblePreset = linkify('Visit https://example.com', presets.accessible);
console.log(accessiblePreset, '\n');

// Example 21: Analytics preset
console.log('=== 21. Analytics Preset ===');
const analytics = linkify('Visit https://example.com?utm_source=test', presets.analytics);
console.log(analytics, '\n');

// Example 22: Mixed content
console.log('=== 22. Mixed Content (All Features) ===');
const mixed = linkify(
  'Visit https://example.com, email hello@example.com, call (555) 123-4567, follow @user and check #trending',
  {
    detectEmails: true,
    detectPhones: true,
    detectHashtags: true,
    detectMentions: true,
    hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
    mentionUrl: (user) => `https://twitter.com/${user}`,
    color: '#0066cc',
    removeTracking: true,
    showTooltip: true,
    domainStyles: {
      'example.com': { icon: '🌐 ' }
    }
  }
);
console.log(mixed, '\n');

// Browser DOM usage
if (typeof document !== 'undefined') {
  console.log('=== 23. Browser DOM Example ===');
  
  // Update element content
  const container = document.getElementById('linkify-demo');
  if (container) {
    container.innerHTML = linkify(
      'Check out https://github.com/example/repo for more info!',
      presets.github
    );
  }

  // Handle multiple elements
  document.querySelectorAll('.linkify-content').forEach((el) => {
    const text = el.textContent || '';
    el.innerHTML = linkify(text, {
      detectEmails: true,
      detectPhones: true,
      color: '#0066cc'
    });
  });

  // Interactive example with click tracking
  const interactive = document.getElementById('interactive-demo');
  if (interactive) {
    const detectedUrls = [];
    interactive.innerHTML = linkify(
      'Visit https://example.com and https://google.com',
      {
        onUrlDetected: (url) => {
          detectedUrls.push(url);
          console.log('Detected:', url);
        },
        domainStyles: {
          'example.com': { icon: '🌐 ', color: '#0066cc' },
          'google.com': { icon: '🔍 ', color: '#4285f4' }
        }
      }
    );
    console.log('Total URLs detected:', detectedUrls.length);
  }
}
