# 🔗 Smart Linkify

<div align="center">

**A lightweight, modern TypeScript library for automatically converting URLs in text to clickable links**

[![npm version](https://img.shields.io/npm/v/@smart-linkify/core.svg?style=flat-square)](https://www.npmjs.com/package/@smart-linkify/core)
[![npm downloads](https://img.shields.io/npm/dm/@smart-linkify/core.svg?style=flat-square)](https://www.npmjs.com/package/@smart-linkify/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@smart-linkify/core?style=flat-square&label=size)](https://bundlephobia.com/package/@smart-linkify/core)

[🎮 **Try Live Demo**](./examples/showcase.html) • [📖 **Documentation**](#-quick-start) • [💻 **Examples**](#-examples) • [🚀 **StackBlitz Playground**](https://stackblitz.com/github/avinashReddiDev/smart-linkify/tree/main/examples)

</div>

---

## 🎮 Try It Now!

<div align="center">

### **No Installation Required!**

<table>
<tr>
<td align="center" width="33%">
<a href="./examples/showcase.html">
<img src="https://img.shields.io/badge/📱_Local_Demo-View-blue?style=for-the-badge" alt="Local Demo">
</a>
<br><sub>Open showcase.html in your browser</sub>
</td>
<td align="center" width="33%">
<a href="https://stackblitz.com/github/avinashReddiDev/smart-linkify/tree/main/examples">
<img src="https://img.shields.io/badge/⚡_StackBlitz-Try_Now-blue?style=for-the-badge" alt="StackBlitz">
</a>
<br><sub>Full IDE experience online</sub>
</td>
<td align="center" width="33%">
<a href="https://codesandbox.io/s/github/avinashReddiDev/smart-linkify/tree/main/examples">
<img src="https://img.shields.io/badge/🏖️_CodeSandbox-Open-blue?style=for-the-badge" alt="CodeSandbox">
</a>
<br><sub>React examples sandbox</sub>
</td>
</tr>
</table>

</div>

---

## 📊 Visual Demo

<table>
<tr>
<th width="50%">❌ Before (Plain Text)</th>
<th width="50%">✅ After (Smart Linkify)</th>
</tr>
<tr>
<td>

```text
Visit https://github.com
Contact: hello@example.com
Call: (555) 123-4567
Follow @github #opensource
```

</td>
<td>

```html
Visit <a href="https://github.com">github.com</a>
Contact: <a href="mailto:hello@example.com">hello@example.com</a>
Call: <a href="tel:5551234567">(555) 123-4567</a>
Follow <a href="https://twitter.com/github">@github</a>
<a href="https://twitter.com/hashtag/opensource">#opensource</a>
```

</td>
</tr>
</table>

> 💡 **See it in action:** Open [`examples/showcase.html`](./examples/showcase.html) for a fully interactive demo with 20+ examples!

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🚀 **Lightweight & Fast**
- Only **~3KB** minified + gzipped
- **Zero dependencies** (core package)
- Tree-shakeable ESM modules
- Blazing fast performance

### 🎯 **Smart Detection**
- URLs (http, https, www, naked)
- Email addresses (mailto:)
- Phone numbers (tel:)
- Hashtags (#tag)
- Mentions (@user)

### 🎨 **Highly Customizable**
- Custom colors & CSS classes
- Link truncation & formatting
- Domain-specific styling
- 14 built-in presets
- Icon support

</td>
<td width="50%">

### ⚛️ **Framework Support**
- Vanilla JavaScript/TypeScript
- React components & hooks
- Vue.js compatible
- Angular compatible
- Node.js ready

### 🔒 **Security First**
- XSS protection (HTML escaping)
- Safe external links (noopener)
- ReDoS protection
- Input validation
- CSP compatible

### 📝 **Developer Friendly**
- Full TypeScript support
- Comprehensive documentation
- Interactive examples
- Active maintenance
- 118 tests (100% passing)

</td>
</tr>
</table>

---

## 📦 Installation

### Core Package (Vanilla JS/TS)

```bash
# npm
npm install @smart-linkify/core

# yarn
yarn add @smart-linkify/core

# pnpm
pnpm add @smart-linkify/core
```

### React Package

```bash
# npm
npm install @smart-linkify/react

# yarn
yarn add @smart-linkify/react

# pnpm
pnpm add @smart-linkify/react
```

---

## 🚀 Quick Start

### 📘 Vanilla JavaScript/TypeScript

```typescript
import { linkify } from '@smart-linkify/core';

const text = "Check out https://github.com and www.google.com!";
const html = linkify(text);

// Output: Check out <a href="https://github.com" ...>https://github.com</a> and <a href="https://www.google.com" ...>www.google.com</a>!

// Add to your page
document.getElementById('content').innerHTML = html;
```

### ⚛️ React

```tsx
import { SmartLinkify } from '@smart-linkify/react';
import { presets } from '@smart-linkify/core';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <SmartLinkify text="Visit https://example.com for more info" />
      
      {/* With custom options */}
      <SmartLinkify 
        text="Contact hello@example.com or call 555-1234"
        options={{
          detectEmails: true,
          detectPhones: true,
          color: '#1da1f2'
        }}
      />
      
      {/* Using presets */}
      <SmartLinkify 
        text="Follow @github and check #opensource"
        options={presets.social}
      />
    </div>
  );
}
```

---

## 💻 Examples

### 🌐 URL Detection

```typescript
import { linkify } from '@smart-linkify/core';

// Basic URLs
linkify("Visit https://github.com");
linkify("Check www.npmjs.com");
linkify("Go to example.com");

// Multiple URLs
linkify("Visit github.com and npmjs.com for more info");
```

**Result:** Links are automatically created with `href`, `target="_blank"`, and `rel="noopener noreferrer"`

### 📧 Email Detection

```typescript
// Enable email detection
const html = linkify("Contact us at hello@example.com", {
  detectEmails: true,
  emailPrefix: 'mailto:',
  color: '#e74c3c'
});
```

**Result:** `Contact us at <a href="mailto:hello@example.com" style="color:#e74c3c">hello@example.com</a>`

### 📱 Phone Detection

```typescript
// Enable phone detection
const html = linkify("Call (555) 123-4567 or +1-555-987-6543", {
  detectPhones: true,
  phonePrefix: 'tel:',
  color: '#3498db'
});
```

**Result:** Phone numbers become clickable tel: links

### #️⃣ Social Media (Hashtags & Mentions)

```typescript
// Detect hashtags and mentions
const html = linkify("Follow @github and check #opensource #javascript", {
  detectHashtags: true,
  detectMentions: true,
  hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
  mentionUrl: (user) => `https://twitter.com/${user}`,
  color: '#1da1f2'
});
```

**Result:** `@github` and `#opensource` become Twitter links

### 🎨 Custom Styling

```typescript
const html = linkify("Visit https://example.com", {
  color: '#ff6b6b',
  className: 'my-custom-link',
  underline: false,
  bold: true,
  iconBefore: '🔗 ',
  iconAfter: ' →',
  maxLength: 30,
  truncateStrategy: 'middle'
});
```

### 🎭 Using Presets

```typescript
import { linkify, presets } from '@smart-linkify/core';

// 14 built-in presets available
linkify(text, presets.minimal);      // Clean, no underline
linkify(text, presets.social);       // Twitter-style blue
linkify(text, presets.professional); // Business formal
linkify(text, presets.secure);       // Security-focused
linkify(text, presets.compact);      // Truncated URLs
linkify(text, presets.email);        // Email-optimized
linkify(text, presets.contact);      // Email + phone
linkify(text, presets.inline);       // Blends with text
```

**Available Presets:**
- `default` - Standard configuration
- `minimal` - Clean, modern look
- `social` - Social media optimized
- `professional` - Business styling
- `secure` - Removes tracking, security focus
- `compact` - Truncated long URLs
- `email` - Email detection enabled
- `contact` - Email + phone detection
- `github` - GitHub-optimized
- `inline` - Minimal inline styling
- `mobile` - Touch-friendly
- `documentation` - Docs styling
- `marketing` - Eye-catching
- `accessibility` - Full ARIA support

---

## 🎨 Configuration Options

### Core Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `color` | `string` | `"inherit"` | Link text color |
| `target` | `string` | `"_blank"` | Link target attribute |
| `rel` | `string` | `"noopener noreferrer"` | Link rel attribute |
| `className` | `string` | `""` | CSS class name |
| `underline` | `boolean` | `true` | Show underline |
| `bold` | `boolean` | `false` | Bold text |
| `italic` | `boolean` | `false` | Italic text |
| `maxLength` | `number` | `undefined` | Truncate URL at length |
| `truncateStrategy` | `'end' \| 'middle' \| 'smart'` | `'end'` | Truncation strategy |
| `truncateText` | `string` | `'...'` | Truncation indicator |

### Detection Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `detectEmails` | `boolean` | `false` | Detect email addresses |
| `detectPhones` | `boolean` | `false` | Detect phone numbers |
| `detectHashtags` | `boolean` | `false` | Detect #hashtags |
| `detectMentions` | `boolean` | `false` | Detect @mentions |
| `emailPrefix` | `string` | `'mailto:'` | Email URL prefix |
| `phonePrefix` | `string` | `'tel:'` | Phone URL prefix |
| `hashtagUrl` | `(tag: string) => string` | `undefined` | Hashtag URL builder |
| `mentionUrl` | `(user: string) => string` | `undefined` | Mention URL builder |

### Advanced Options

| Option | Type | Description |
|--------|------|-------------|
| `iconBefore` | `string` | Icon/text before link |
| `iconAfter` | `string` | Icon/text after link |
| `domainStyles` | `Record<string, StyleOptions>` | Domain-specific styling |
| `blocklist` | `string[]` | Block specific domains |
| `allowlist` | `string[]` | Only allow specific domains |
| `removeTracking` | `boolean` | Strip UTM/tracking params |
| `ariaLabel` | `string \| (url) => string` | ARIA label for a11y |
| `screenReaderText` | `string` | Screen reader text |
| `tabIndex` | `number` | Tab index for navigation |
| `customStyles` | `CSSProperties` | Custom CSS styles object |

<details>
<summary><b>📖 View All 40+ Options</b></summary>

See [`packages/core/src/types.ts`](packages/core/src/types.ts) for complete TypeScript definitions.

</details>

---

## 🎯 Real-World Examples

### 💬 Chat Application

```tsx
function ChatMessage({ user, text }) {
  return (
    <div className="message">
      <strong>{user}:</strong>
      <SmartLinkify 
        text={text}
        options={{
          detectHashtags: true,
          detectMentions: true,
          hashtagUrl: (tag) => `/hashtag/${tag}`,
          mentionUrl: (user) => `/user/${user}`,
          color: '#1da1f2'
        }}
      />
    </div>
  );
}

// Usage
<ChatMessage 
  user="Alice" 
  text="Check out github.com/user/repo! #opensource @bob" 
/>
```

### 📝 Comment Section

```tsx
function Comment({ author, content, timestamp }) {
  return (
    <div className="comment">
      <div className="header">
        <h4>{author}</h4>
        <span>{timestamp}</span>
      </div>
      <SmartLinkify 
        text={content}
        options={{
          detectEmails: true,
          detectHashtags: true,
          maxLength: 60,
          color: '#0066cc'
        }}
      />
    </div>
  );
}
```

### 👤 User Bio

```tsx
function UserBio({ bio }) {
  return (
    <SmartLinkify 
      text={bio}
      options={presets.inline}
    />
  );
}

// Usage
<UserBio bio="Developer | Website: example.com | GitHub: github.com/johndoe" />
```

### 📧 Email Template

```javascript
const emailContent = `
  New features released! 
  Check them out at https://example.com/features
  
  Questions? Email support@example.com
  Follow us @example for updates!
`;

const html = linkify(emailContent, {
  detectEmails: true,
  detectMentions: true,
  removeTracking: true,
  color: '#0066cc'
});
```

---

## 📚 Package Structure

```
smart-linkify/
├── packages/
│   ├── core/                    # 📦 Core library (~3KB)
│   │   ├── src/
│   │   │   ├── linkify.ts       # Main linkification function
│   │   │   ├── presets.ts       # 14 built-in presets
│   │   │   └── types.ts         # TypeScript types
│   │   └── dist/
│   │       ├── index.js         # ESM build
│   │       ├── index.cjs        # CommonJS build
│   │       └── index.d.ts       # Type definitions
│   │
│   └── react/                   # ⚛️ React package (~1KB)
│       ├── src/
│       │   └── index.tsx        # React components & hooks
│       └── dist/
│
├── examples/                    # 💡 Usage examples
│   ├── showcase.html           # 🌟 Interactive visual demo
│   ├── demo-comprehensive.html  # Complete feature demo
│   ├── vanilla-comprehensive.js # All vanilla JS examples
│   ├── react-examples.tsx       # React component examples
│   └── advanced-comprehensive.tsx # Advanced patterns
│
└── docs/                        # 📖 Documentation
    ├── README.md
    ├── QUICKSTART.md
    └── CONTRIBUTING.md
```

---

## 🔍 How It Works

Smart Linkify uses sophisticated pattern matching to detect various types of linkable content:

1. **URL Detection** - Matches http/https URLs, www prefixes, and naked domains
2. **Email Detection** - Validates email format with TLD checking
3. **Phone Detection** - Recognizes international and US phone formats
4. **Social Detection** - Finds hashtags and mentions with configurable URL builders
5. **HTML Generation** - Creates safe, escaped HTML with customizable attributes
6. **Security** - Protects against XSS, ReDoS, and unsafe external links

---

## 🚀 Performance

<div align="center">

| Metric | Value | Notes |
|--------|-------|-------|
| **Bundle Size** | ~3KB | Core package (minified + gzipped) |
| **Dependencies** | 0 | Core package only |
| **Load Time** | <10ms | Average initialization |
| **Processing** | ~100k chars/sec | Typical performance |
| **Memory** | Minimal | No memory leaks |
| **Tests** | 118/118 ✓ | 100% passing |

</div>

function App() {
  return (
    <SmartLinkify 
      text="Visit https://example.com for more info"
      options={{ color: '#1da1f2', className: 'custom-link' }}
    />
  );
}
```

## 🎨 Options

All options are optional and can be customized:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `color` | `string` | `"inherit"` | Link text color |
| `target` | `"_blank" \| "_self"` | `"_blank"` | Link target attribute |
| `className` | `string` | `""` | CSS class name for links |
| `underline` | `boolean` | `true` | Whether to underline links |
| `maxLength` | `number` | `undefined` | Maximum display length (truncates with ...) |

### Example with Options

```typescript
import { linkify } from '@smart-linkify/core';

const options = {
  color: '#0066cc',
  target: '_self',
  className: 'my-link',
  underline: false,
  maxLength: 30
};

const html = linkify("Visit https://example.com/very/long/url", options);
```

## 🎭 Presets

Smart Linkify comes with built-in presets for common use cases:

```typescript
import { linkify, presets } from '@smart-linkify/core';

// Minimal preset - no underline
linkify(text, presets.minimal);

// Secure preset - always opens in new tab
linkify(text, presets.secure);

// Social preset - styled for social media
linkify(text, presets.social);
```

### Available Presets

- **minimal**: Clean look without underlines
- **secure**: Opens links in new tab for security
- **social**: Styled with social media blue color

## 📚 API Reference

### Core Package (`@smart-linkify/core`)

#### `linkify(text: string, options?: LinkifyOptions): string`

Converts URLs in text to HTML anchor tags.

**Parameters:**
- `text` - The input text containing URLs
- `options` - Optional configuration object

**Returns:** HTML string with linkified URLs

#### `presets: Record<string, LinkifyOptions>`

Pre-configured option sets for common use cases.

### React Package (`@smart-linkify/react`)

#### `<SmartLinkify />`

React component for linkifying text.

**Props:**
- `text: string` - The text to linkify
- `options?: LinkifyOptions` - Optional configuration

## 🔍 URL Detection

Smart Linkify automatically detects various URL formats:

- ✅ `https://example.com`
- ✅ `http://example.com`
- ✅ `www.example.com`
- ✅ `example.com`
- ✅ `subdomain.example.com`
- ✅ URLs with paths: `example.com/path/to/page`
- ✅ URLs with query strings: `example.com?query=value`
- ✅ URLs with fragments: `example.com#section`

## 💡 Use Cases

- **Chat applications** - Auto-link URLs in messages
- **Content management** - Linkify user-generated content
- **Documentation** - Make references clickable
- **Social media** - Link mentions, hashtags, and URLs
- **Email templates** - Convert plain text links to clickable ones
- **Comment sections** - Enhance user comments with auto-linking

## 🏗️ Project Structure

This is a monorepo containing multiple packages:

```
smart-linkify/
├── packages/
│   ├── core/          # Core linkify functionality
│   └── react/         # React components
├── package.json       # Root package configuration
└── tsconfig.json      # TypeScript configuration
```

## 🛠️ Development

### Setup

```bash
# Clone the repository
git clone https://github.com/avinashReddiDev/smart-linkify.git

# Install dependencies
npm install

# Build all packages
npm run build
```

### Building

```bash
# Build core package
cd packages/core && npm run build

# Build React package
cd packages/react && npm run build
```

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

Found a bug or have a feature request? [Open an issue](https://github.com/avinashReddiDev/smart-linkify/issues)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

## 👨‍💻 Author

**Avinash Reddi**
- GitHub: [@avinashReddiDev](https://github.com/avinashReddiDev)

## 🙏 Acknowledgments

- Inspired by the need for simple, modern URL linkification
- Built with TypeScript and modern tooling
- Thanks to all contributors!

---

Made with ❤️ by the Smart Linkify team
