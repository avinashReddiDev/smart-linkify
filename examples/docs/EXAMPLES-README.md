# Smart Linkify - Examples

This directory contains interactive examples demonstrating all features of Smart Linkify.

## 🚀 Quick Start

### Option 1: Run Locally

```bash
cd examples
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

### Option 2: Online Playgrounds

**StackBlitz (Recommended):**
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/avinashReddiDev/smart-linkify/tree/main/examples)

**CodeSandbox:**
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/avinashReddiDev/smart-linkify/tree/main/examples)

## 📂 Files Overview

### React Examples (Vite + TypeScript)
- **`react-app.tsx`** - Complete React app with 10 interactive examples
- **`index.html`** - HTML entry point
- **`package.json`** - Dependencies and scripts
- **`vite.config.ts`** - Vite configuration
- **`styles.css`** - Styling for examples

### Vanilla JavaScript Examples
- **`vanilla.js`** - Basic vanilla JS examples
- **`vanilla-advanced.js`** - Advanced vanilla JS examples
- **`vanilla-comprehensive.js`** - All features in vanilla JS

### HTML Demos
- **`demo.html`** - Simple HTML demo (no build required)
- **`demo-comprehensive.html`** - Comprehensive HTML demo
- **`showcase.html`** - Full interactive showcase

### TypeScript/React Examples
- **`react-examples.tsx`** - React component examples
- **`advanced-examples.tsx`** - Advanced React examples
- **`advanced-comprehensive.tsx`** - All advanced features

## 📦 What's Included

The React app (`react-app.tsx`) demonstrates:

1. **Basic Usage** - Simple URL linkification
2. **Custom Styling** - Colors, bold, underline options
3. **Email Features** - Subject and body parameters
4. **Phone Formatting** - Custom formats and country codes
5. **Social Media** - Hashtags and mentions
6. **Domain Styling** - Different styles per domain
7. **URL Truncation** - Shorten long URLs with hover tooltip
8. **Security** - Input sanitization and XSS prevention
9. **useLinkify Hook** - React hook with live text editing
10. **Advanced Callbacks** - Click tracking and URL transformation

## 🎯 Usage in Your Project

After trying the examples, install in your project:

```bash
# For React projects
npm install @smart-linkify/react

# For vanilla JS/TS projects
npm install @smart-linkify/core
```

### React Usage

```tsx
import { SmartLinkify } from '@smart-linkify/react';

function MyComponent() {
  return (
    <SmartLinkify options={{ color: '#0066cc', target: '_blank' }}>
      Visit https://example.com for more info!
    </SmartLinkify>
  );
}
```

### Vanilla JS Usage

```javascript
import { linkify } from '@smart-linkify/core';

const html = linkify('Visit https://example.com', {
  color: '#0066cc',
  target: '_blank'
});
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration Files

- **`package.json`** - All dependencies (React 18, Vite, TypeScript)
- **`tsconfig.json`** - TypeScript configuration
- **`vite.config.ts`** - Vite bundler configuration
- **`.stackblitzrc`** - StackBlitz configuration
- **`sandbox.config.json`** - CodeSandbox configuration

## 🌟 Features Demonstrated

✅ URL detection (with/without protocol)  
✅ Email addresses (with subject/body)  
✅ Phone numbers (with formatting)  
✅ Hashtags and mentions  
✅ Custom styling per link  
✅ Domain-specific styles  
✅ URL truncation with tooltips  
✅ Security & XSS prevention  
✅ React hooks and components  
✅ Callback functions (onClick, onHover)  
✅ URL transformation  
✅ Input sanitization  

## 📚 Documentation

- [Full Documentation](https://github.com/avinashReddiDev/smart-linkify#readme)
- [Core Package](https://www.npmjs.com/package/@smart-linkify/core)
- [React Package](https://www.npmjs.com/package/@smart-linkify/react)

## 🐛 Issues?

Report issues at: https://github.com/avinashReddiDev/smart-linkify/issues

## 📄 License

MIT © Avinash Reddi
