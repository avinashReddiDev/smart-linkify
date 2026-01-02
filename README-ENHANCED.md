# 🔗 Smart Linkify

> A powerful, feature-rich TypeScript library for automatically converting URLs, emails, phone numbers, and social mentions into clickable links with extensive customization options.

[![npm version](https://img.shields.io/npm/v/@smart-linkify/core.svg)](https://www.npmjs.com/package/@smart-linkify/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

### Core Features
- 🚀 **Lightweight & Fast** - Zero dependencies for core package
- 📦 **Monorepo Structure** - Core library + React bindings
- 🎨 **Highly Customizable** - 50+ configuration options
- 🔒 **Type-safe** - Written in TypeScript with full type definitions
- 🌐 **Modern** - ESM and CJS support, tree-shakeable

### Detection Features
- 🔗 **URL Detection** - HTTP/HTTPS URLs with and without protocols
- 📧 **Email Detection** - Automatically linkify email addresses
- 📱 **Phone Detection** - International and domestic phone numbers
- #️⃣ **Hashtag Support** - Social media hashtag linking
- @️⃣ **Mention Support** - User mention linking (Twitter, GitHub, etc.)

### Styling & Customization
- 🎭 **15+ Built-in Presets** - Ready-to-use styles for common scenarios
- 🎨 **Domain-Specific Styling** - Different styles per domain
- 🖼️ **Icon Support** - Add icons before/after links
- ✂️ **Smart Truncation** - Multiple truncation strategies
- 🌈 **Full CSS Control** - Colors, classes, inline styles

### Security & Privacy
- 🛡️ **Domain Blocklist** - Block specific domains
- ✅ **Domain Allowlist** - Only allow specific domains
- 🔐 **Tracking Removal** - Strip UTM and tracking parameters
- 🔒 **XSS Protection** - Built-in HTML escaping

### Accessibility
- ♿ **ARIA Labels** - Full ARIA attribute support
- 🗣️ **Screen Reader Text** - Hidden accessibility text
- 📱 **Keyboard Navigation** - Proper focus management
- 🎯 **Semantic HTML** - Proper anchor tag structure

## 📦 Installation

### Core Package (Vanilla JS/TS)
```bash
npm install @smart-linkify/core
```

### React Package
```bash
npm install @smart-linkify/react
```

## 🚀 Quick Start

### Vanilla JavaScript/TypeScript

```typescript
import { linkify } from '@smart-linkify/core';

// Basic usage
const text = "Visit https://example.com";
const html = linkify(text);
// Output: Visit <a href="https://example.com" target="_blank">https://example.com</a>

// With options
const html2 = linkify("Email: hello@example.com", {
  detectEmails: true,
  color: '#0066cc'
});
```

### React

```tsx
import { SmartLinkify } from '@smart-linkify/react';

function App() {
  return (
    <SmartLinkify 
      text="Visit https://example.com"
      options={{ color: '#1da1f2' }}
      onLinkClick={(url) => console.log('Clicked:', url)}
    />
  );
}

// Using the hook
import { useLinkify } from '@smart-linkify/react';

function MyComponent() {
  const html = useLinkify("Visit https://example.com", { color: 'blue' });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

## 🎨 Configuration Options

### Basic Styling

```typescript
interface LinkifyOptions {
  color?: string;                    // Link color
  target?: "_blank" | "_self";       // Link target
  className?: string;                // CSS class
  underline?: boolean;               // Show underline
  maxLength?: number;                // Truncate display text
}
```

### Detection Options

```typescript
interface LinkifyOptions {
  // Email detection
  detectEmails?: boolean;
  emailPrefix?: string;              // Default: 'mailto:'
  
  // Phone detection
  detectPhones?: boolean;
  phonePrefix?: string;              // Default: 'tel:'
  phoneRegion?: string;              // e.g., 'US', 'UK'
  
  // Hashtag detection
  detectHashtags?: boolean;
  hashtagUrl?: (tag: string) => string;
  
  // Mention detection
  detectMentions?: boolean;
  mentionUrl?: (username: string) => string;
}
```

### Security Features

```typescript
interface LinkifyOptions {
  blocklist?: string[];              // Block specific domains
  allowlist?: string[];              // Only allow specific domains
  removeTracking?: boolean;          // Remove UTM parameters
}
```

### Customization

```typescript
interface LinkifyOptions {
  iconBefore?: string;               // HTML/text before link
  iconAfter?: string;                // HTML/text after link
  iconClass?: string;                // Icon CSS class
  
  domainStyles?: Record<string, {
    color?: string;
    icon?: string;
    className?: string;
  }>;
  
  truncateStrategy?: 'middle' | 'end' | 'smart';
  preserveDomain?: boolean;
  showTooltip?: boolean;
}
```

### Accessibility

```typescript
interface LinkifyOptions {
  ariaLabel?: string | ((url: string) => string);
  screenReaderText?: string;
}
```

### Analytics & Events

```typescript
interface LinkifyOptions {
  trackClicks?: boolean;
  onUrlDetected?: (url: string) => void;
}
```

## 🎭 Built-in Presets

Smart Linkify comes with 15 ready-to-use presets:

### 1. Minimal
```typescript
import { presets } from '@smart-linkify/core';
linkify(text, presets.minimal);
// Clean look without underlines
```

### 2. Secure
```typescript
linkify(text, presets.secure);
// Opens in new tab, removes tracking parameters
```

### 3. Social
```typescript
linkify(text, presets.social);
// Twitter blue color, detects hashtags and mentions
linkify("Follow @user #javascript", presets.social);
```

### 4. Professional
```typescript
linkify(text, presets.professional);
// Conservative blue, underlined, new tab, removes tracking
```

### 5. Compact
```typescript
linkify(text, presets.compact);
// Truncates long URLs with smart strategy
```

### 6. Inline
```typescript
linkify(text, presets.inline);
// Subtle styling, opens in same tab
```

### 7. Email
```typescript
linkify(text, presets.email);
// Detects emails, removes tracking
linkify("Contact: hello@example.com", presets.email);
```

### 8. Contact
```typescript
linkify(text, presets.contact);
// Detects both emails and phone numbers
linkify("Email: hello@example.com, Call: 555-123-4567", presets.contact);
```

### 9. Mobile
```typescript
linkify(text, presets.mobile);
// Optimized for mobile with short truncation
linkify("Call 555-123-4567 or visit example.com", presets.mobile);
```

### 10. GitHub
```typescript
linkify(text, presets.github);
// GitHub theme with octocat icon
linkify("Star us on https://github.com/user/repo", presets.github);
```

### 11. Documentation
```typescript
linkify(text, presets.documentation);
// For technical docs with document icon
```

### 12. Accessible
```typescript
linkify(text, presets.accessible);
// Maximum accessibility features
```

### 13. Safe
```typescript
linkify(text, presets.safe);
// Security-focused with screen reader text
```

### 14. Analytics
```typescript
linkify(text, presets.analytics);
// With click tracking enabled
```

## 📚 Usage Examples

### Email Detection

```typescript
const text = "Contact us at hello@example.com";
const html = linkify(text, {
  detectEmails: true
});
// Output: Contact us at <a href="mailto:hello@example.com">hello@example.com</a>
```

### Phone Number Detection

```typescript
const text = "Call us at (555) 123-4567";
const html = linkify(text, {
  detectPhones: true
});
// Output: Call us at <a href="tel:5551234567">(555) 123-4567</a>
```

### Hashtag & Mention Detection

```typescript
const text = "Follow @github and check out #javascript";
const html = linkify(text, {
  detectHashtags: true,
  detectMentions: true,
  hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
  mentionUrl: (user) => `https://twitter.com/${user}`
});
```

### Domain-Specific Styling

```typescript
const html = linkify("Visit https://github.com and https://npmjs.com", {
  domainStyles: {
    'github.com': {
      icon: '🐙 ',
      color: '#24292f',
      className: 'github-link'
    },
    'npmjs.com': {
      icon: '📦 ',
      color: '#CB3837',
      className: 'npm-link'
    }
  }
});
```

### Remove Tracking Parameters

```typescript
const text = "Visit https://example.com?utm_source=newsletter&foo=bar";
const html = linkify(text, {
  removeTracking: true
});
// Removes utm_source, keeps foo=bar
```

### Domain Blocklist

```typescript
const text = "Good: https://example.com, Bad: https://spam.com";
const html = linkify(text, {
  blocklist: ['spam.com']
});
// Only linkifies example.com
```

### Truncation Strategies

```typescript
const longUrl = "https://example.com/very/long/path";

// End truncation
linkify(longUrl, { maxLength: 30, truncateStrategy: 'end' });
// Output: https://example.com/very...

// Middle truncation
linkify(longUrl, { maxLength: 30, truncateStrategy: 'middle' });
// Output: https://exa...long/path

// Smart truncation (preserves domain)
linkify(longUrl, { maxLength: 30, truncateStrategy: 'smart' });
// Output: example.com...
```

### Accessibility Features

```typescript
const html = linkify("Visit https://example.com", {
  ariaLabel: (url) => `External link to ${url}`,
  screenReaderText: "Opens in new window",
  showTooltip: true
});
```

### Mixed Content Detection

```typescript
const text = `
  Visit https://example.com
  Email: hello@example.com
  Call: (555) 123-4567
  Follow: @user
  Tag: #javascript
`;

const html = linkify(text, {
  detectEmails: true,
  detectPhones: true,
  detectHashtags: true,
  detectMentions: true,
  hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
  mentionUrl: (user) => `https://twitter.com/${user}`,
  removeTracking: true,
  domainStyles: {
    'example.com': { icon: '🌐 ' }
  }
});
```

## ⚛️ React Component Features

### Basic Usage

```tsx
import { SmartLinkify } from '@smart-linkify/react';

<SmartLinkify 
  text="Visit https://example.com" 
  options={{ color: 'blue' }}
/>
```

### With Click Handler

```tsx
<SmartLinkify 
  text="Visit https://example.com"
  onLinkClick={(url, event) => {
    console.log('Clicked:', url);
    // Send to analytics
    // event.preventDefault() to prevent navigation
  }}
/>
```

### With Custom Styling

```tsx
<SmartLinkify 
  text="Visit https://example.com"
  className="my-wrapper"
  style={{ padding: '10px' }}
  options={presets.social}
/>
```

### Using the Hook

```tsx
import { useLinkify } from '@smart-linkify/react';

function MyComponent() {
  const html = useLinkify("Visit https://example.com", {
    color: 'blue',
    detectEmails: true
  });
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

## 🧪 Testing

Run tests with vitest:

```bash
npm test              # Run tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Run with coverage
```

## 📖 API Reference

### Core Functions

#### `linkify(text: string, options?: LinkifyOptions): string`
Converts URLs, emails, phones, hashtags, and mentions in text to HTML anchor tags.

**Parameters:**
- `text`: Input text to linkify
- `options`: Optional configuration object

**Returns:** HTML string with linkified content

**Throws:** `TypeError` if text is not a string

### React Components

#### `<SmartLinkify />`
React component that renders linkified text.

**Props:**
- `text: string` - Text to linkify
- `options?: LinkifyOptions` - Linkify configuration
- `onLinkClick?: (url: string, event: React.MouseEvent) => void` - Click handler
- `className?: string` - Wrapper CSS class
- `style?: React.CSSProperties` - Wrapper inline styles

#### `useLinkify(text: string, options?: LinkifyOptions): string`
React hook that returns linkified HTML string.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © Avinash Reddi

## 🙏 Acknowledgments

Built with TypeScript, React, and ❤️

## 📊 Package Stats

- **Core Package**: ~5KB gzipped
- **React Package**: ~2KB gzipped (+ peer dependencies)
- **Zero Runtime Dependencies** (core package)
- **Tree-shakeable** ESM modules

## 🔗 Links

- [npm - @smart-linkify/core](https://www.npmjs.com/package/@smart-linkify/core)
- [npm - @smart-linkify/react](https://www.npmjs.com/package/@smart-linkify/react)
- [GitHub Repository](https://github.com/avinashReddiDev/smart-linkify)
- [Issue Tracker](https://github.com/avinashReddiDev/smart-linkify/issues)

---

Made with 🔗 by [Avinash Reddi](https://github.com/avinashReddiDev)
