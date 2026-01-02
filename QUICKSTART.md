# Quick Start Guide

Get up and running with Smart Linkify in 5 minutes!

## Installation

Choose the package you need:

```bash
# For vanilla JavaScript/TypeScript
npm install @smart-linkify/core

# For React projects
npm install @smart-linkify/react
```

## 1. Basic Usage (Vanilla JS)

```javascript
import { linkify } from '@smart-linkify/core';

const text = "Visit https://github.com for code!";
const html = linkify(text);

// Use in your HTML
document.getElementById('content').innerHTML = html;
```

## 2. React Usage

```jsx
import { SmartLinkify } from '@smart-linkify/react';

function App() {
  return (
    <SmartLinkify text="Check out https://example.com" />
  );
}
```

## 3. With Custom Styling

```javascript
import { linkify } from '@smart-linkify/core';

const html = linkify("Visit example.com", {
  color: '#0066cc',
  className: 'my-link',
  underline: false,
  maxLength: 30
});
```

## 4. Using Presets

```javascript
import { linkify, presets } from '@smart-linkify/core';

// Social media style
linkify("Follow us at twitter.com", presets.social);

// Professional style
linkify("Docs at docs.example.com", presets.professional);

// Compact URLs
linkify("Long URL here", presets.compact);
```

## 5. React with Presets

```jsx
import { SmartLinkify } from '@smart-linkify/react';
import { presets } from '@smart-linkify/core';

function SocialPost({ text }) {
  return <SmartLinkify text={text} options={presets.social} />;
}
```

## Common Use Cases

### Chat Application

```jsx
function ChatMessage({ username, message }) {
  return (
    <div className="message">
      <strong>{username}:</strong>
      <SmartLinkify text={message} options={presets.social} />
    </div>
  );
}
```

### Comment Section

```javascript
const comments = document.querySelectorAll('.comment-text');
comments.forEach(el => {
  el.innerHTML = linkify(el.textContent, {
    color: '#1da1f2',
    maxLength: 50
  });
});
```

### User Bio

```jsx
function UserProfile({ bio }) {
  return (
    <div className="bio">
      <SmartLinkify text={bio} options={presets.inline} />
    </div>
  );
}
```

## Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `color` | string | "inherit" | Link color |
| `target` | "_blank" \| "_self" | "_blank" | Where to open |
| `className` | string | "" | CSS class |
| `underline` | boolean | true | Show underline |
| `maxLength` | number | undefined | Truncate at length |

## Available Presets

- **minimal** - Clean, no underline
- **secure** - Opens in new tab
- **social** - Twitter blue (#1da1f2)
- **professional** - Business blue (#0066cc)
- **compact** - Truncated to 40 chars
- **inline** - Blends with text

## TypeScript Support

Full TypeScript definitions included:

```typescript
import { linkify, type LinkifyOptions } from '@smart-linkify/core';

const options: LinkifyOptions = {
  color: '#0066cc',
  target: '_blank',
  maxLength: 30
};

const result: string = linkify("text", options);
```

## Next Steps

- Read the full [README](./README.md)
- Check out [examples](./examples/)
- Review [API documentation](./README.md#api-reference)
- Read [contributing guide](./CONTRIBUTING.md)

## Need Help?

- 📖 [Full Documentation](./README.md)
- 💬 [GitHub Issues](https://github.com/avinashReddiDev/smart-linkify/issues)
- 🎯 [Examples](./examples/)

## Tips

1. Always sanitize user input before linkifying
2. Use presets for consistent styling across your app
3. Test with various URL formats
4. Consider using `maxLength` for long URLs on mobile
5. Add custom CSS classes for fine-tuned control

Happy linkifying! 🔗
