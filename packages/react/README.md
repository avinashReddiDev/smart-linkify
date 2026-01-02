# @smart-linkify/react

React components for smart URL linkification.

## Installation

```bash
npm install @smart-linkify/react
```

Note: This package requires React 17 or higher as a peer dependency.

## Usage

```tsx
import { SmartLinkify } from '@smart-linkify/react';
import { presets } from '@smart-linkify/core';

function App() {
  return (
    <div>
      <SmartLinkify 
        text="Visit https://example.com for more info"
      />
      
      <SmartLinkify 
        text="Check out www.github.com"
        options={{
          color: '#1da1f2',
          className: 'custom-link',
          maxLength: 30
        }}
      />
      
      <SmartLinkify 
        text="Social media link"
        options={presets.social}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | `string` | Yes | The text to linkify |
| `options` | `LinkifyOptions` | No | Configuration options |

## API

See the main [README](../../README.md) for full documentation.

## License

MIT
