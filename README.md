# 🔗 Smart Linkify

A lightweight, modern TypeScript library for automatically converting URLs in text to clickable links. Works seamlessly in vanilla JavaScript, React, and other frameworks.

[![npm version](https://img.shields.io/npm/v/@smart-linkify/core.svg)](https://www.npmjs.com/package/@smart-linkify/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🚀 **Lightweight** - Zero dependencies for core package
- 📦 **Multiple packages** - Core library + React bindings
- 🎨 **Customizable** - Style links with colors, classes, and custom behavior
- 🔒 **Type-safe** - Written in TypeScript with full type definitions
- 🎯 **Smart detection** - Automatically detects URLs with various formats
- 🎭 **Preset styles** - Built-in presets for common use cases
- 🌐 **Modern** - ESM and CJS support, tree-shakeable

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

const text = "Check out https://github.com and www.google.com!";
const html = linkify(text);
// Output: Check out <a href="https://github.com" target="_blank">https://github.com</a> and <a href="https://www.google.com" target="_blank">www.google.com</a>!
```

### React

```tsx
import { SmartLinkify } from '@smart-linkify/react';

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
