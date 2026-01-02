# Examples

This directory contains various examples of using Smart Linkify in different scenarios.

**Note**: These are example files for reference and are not compiled or published. They may contain TypeScript errors that would be resolved in a real project setup.

## Files

### `vanilla.js`
Basic JavaScript/TypeScript examples demonstrating:
- Basic usage
- Custom options
- Using presets
- Error handling
- Multiple URLs
- DOM integration

### `react-examples.tsx`
React component examples including:
- Basic React component usage
- Custom styling
- Chat message components
- Comment sections
- User bios
- Mobile-friendly links

### `demo.html`
Interactive HTML demo page that you can open in a browser:
- Live interactive demo
- Multiple preset examples
- Visual examples

## Running the Examples

### Vanilla JavaScript
```bash
# Using Node.js
node examples/vanilla.js

# Or import in your project
import './examples/vanilla.js';
```

### React Examples
```bash
# Install dependencies first
npm install

# Import in your React app
import { BasicExample, ChatMessage } from './examples/react-examples';
```

### HTML Demo
Simply open `demo.html` in your web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000/examples/demo.html
```

## Use Cases Demonstrated

1. **Chat Applications** - Auto-link URLs in messages
2. **Comment Systems** - Linkify user-generated content
3. **Social Media** - Style links for social platforms
4. **Documentation** - Professional link styling
5. **Mobile Apps** - Truncated URLs for small screens
6. **Content Management** - Safe HTML generation

## Note

The examples use ES modules. Make sure your environment supports them or use a bundler like webpack, vite, or esbuild.
