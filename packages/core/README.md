# @smart-linkify/core

Core library for converting URLs in text to clickable links.

## Installation

```bash
npm install @smart-linkify/core
```

## Usage

```typescript
import { linkify, presets } from '@smart-linkify/core';

// Basic usage
const html = linkify("Visit https://example.com");

// With options
const customHtml = linkify("Check www.example.com", {
  color: '#0066cc',
  target: '_self',
  className: 'custom-link',
  maxLength: 30
});

// Using presets
const socialHtml = linkify(text, presets.social);
```

## API

See the main [README](../../README.md) for full documentation.

## License

MIT
