# Smart Linkify Examples

A comprehensive collection of examples demonstrating all features of Smart Linkify.

## 📁 Folder Structure

```
examples/
├── react/              # React + TypeScript examples
│   ├── react-app.tsx              # Main interactive demo (10 examples)
│   ├── react-examples.tsx         # Component examples
│   ├── advanced-examples.tsx      # Advanced features
│   └── advanced-comprehensive.tsx # All features combined
│
├── vanilla/            # Plain JavaScript examples
│   ├── vanilla.js                 # Basic examples
│   ├── vanilla-advanced.js        # Advanced features
│   └── vanilla-comprehensive.js   # Complete feature set
│
├── html/               # Standalone HTML demos
│   ├── demo.html                  # Simple demo (no build)
│   ├── demo-comprehensive.html    # Full features demo
│   └── showcase.html              # Interactive showcase
│
├── docs/               # Documentation
│   ├── README.md                  # Getting started
│   ├── README-COMPLETE.md         # Full documentation
│   └── EXAMPLES-README.md         # Examples guide
│
└── Root files          # Project configuration
    ├── package.json               # Dependencies
    ├── vite.config.ts            # Vite config
    ├── tsconfig.json             # TypeScript config
    ├── index.html                # Main entry point
    └── styles.css                # Shared styles
```

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server (runs React app)
npm run dev

# Open http://localhost:3000
```

### Online Playgrounds

**StackBlitz:**
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/avinashReddiDev/smart-linkify/tree/main/examples)

**CodeSandbox:**
[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/avinashReddiDev/smart-linkify/tree/main/examples)

## 📦 Choose Your Example

### 🎯 React Examples (`react/`)

Perfect for React/Next.js/Remix projects:

- **`react-app.tsx`** - Start here! Interactive demo with 10 examples
- **`react-examples.tsx`** - Basic React component usage
- **`advanced-examples.tsx`** - Advanced features and hooks
- **`advanced-comprehensive.tsx`** - Everything in one file

**Run locally:**
```bash
npm run dev
# Opens react-app.tsx at localhost:3000
```

### 💻 Vanilla JavaScript (`vanilla/`)

For plain JS/TS projects without frameworks:

- **`vanilla.js`** - Basic linkification examples
- **`vanilla-advanced.js`** - Advanced features
- **`vanilla-comprehensive.js`** - Complete feature showcase

**Use in your project:**
```javascript
import { linkify } from '@smart-linkify/core';
const html = linkify('Visit https://example.com');
```

### 🌐 HTML Demos (`html/`)

No build step required - just open in browser:

- **`demo.html`** - Simple demo using CDN
- **`demo-comprehensive.html`** - All features with CDN
- **`showcase.html`** - Full interactive showcase

**Try instantly:**
```bash
# Open any HTML file in your browser
open html/demo.html
```

## 🎨 Features Demonstrated

### Basic Features
✅ URL detection (with/without protocol)  
✅ Email addresses  
✅ Phone numbers  
✅ Custom styling (colors, fonts, underline)  
✅ Target attributes (_blank, _self)  
✅ Custom CSS classes  

### Advanced Features
✅ Email subject and body parameters  
✅ Phone number formatting  
✅ Hashtags and mentions  
✅ Domain-specific styling  
✅ URL truncation with tooltips  
✅ Security (XSS prevention, input sanitization)  
✅ React hooks (`useLinkify`)  
✅ Callback functions (onClick, onHover)  
✅ URL transformation  
✅ BeforeLink/AfterLink hooks  

## 📚 Documentation

- [Getting Started Guide](docs/README.md)
- [Complete Documentation](docs/README-COMPLETE.md)
- [Examples Guide](docs/EXAMPLES-README.md)
- [npm - Core Package](https://www.npmjs.com/package/@smart-linkify/core)
- [npm - React Package](https://www.npmjs.com/package/@smart-linkify/react)
- [GitHub Repository](https://github.com/avinashReddiDev/smart-linkify)

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start dev server (React app with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Usage in Your Project

### Install

```bash
# For React projects
npm install @smart-linkify/react

# For vanilla JS/TS projects
npm install @smart-linkify/core
```

### React Usage

```tsx
import { SmartLinkify, useLinkify } from '@smart-linkify/react';

// Component
function MyComponent() {
  return (
    <SmartLinkify options={{ color: '#0066cc', target: '_blank' }}>
      Visit https://example.com and email hello@example.com
    </SmartLinkify>
  );
}

// Hook
function MyHook() {
  const [text, setText] = useState('Visit https://example.com');
  const html = useLinkify(text, { color: '#0066cc' });
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

### Vanilla JS Usage

```javascript
import { linkify } from '@smart-linkify/core';

const html = linkify('Visit https://example.com', {
  color: '#0066cc',
  target: '_blank',
  className: 'my-link'
});

document.getElementById('output').innerHTML = html;
```

### CDN Usage (HTML)

```html
<!-- Load from CDN -->
<script type="module">
  import { linkify } from 'https://cdn.jsdelivr.net/npm/@smart-linkify/core/+esm';
  
  const html = linkify('Visit https://example.com');
  document.body.innerHTML = html;
</script>
```

## 🎯 Recommended Starting Points

| If you're using... | Start with... | Location |
|-------------------|---------------|----------|
| React | `react-app.tsx` | `react/react-app.tsx` |
| Next.js / Remix | `react-examples.tsx` | `react/react-examples.tsx` |
| Vue / Angular | `vanilla-advanced.js` | `vanilla/vanilla-advanced.js` |
| Plain HTML | `demo.html` | `html/demo.html` |
| Just exploring | Run `npm run dev` | Opens interactive demo |

## 🐛 Issues & Support

- [Report Issues](https://github.com/avinashReddiDev/smart-linkify/issues)
- [Discussions](https://github.com/avinashReddiDev/smart-linkify/discussions)
- Email: reddiavinash59@gmail.com

## 📄 License

MIT © Avinash Reddi
