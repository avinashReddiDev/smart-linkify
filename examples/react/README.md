# React Examples

Interactive React + TypeScript examples demonstrating Smart Linkify features.

## 📂 Files

### `react-app.tsx` ⭐ **Start Here**
Complete interactive demo with 10 examples:
1. Basic URL linkification
2. Custom styling (colors, bold, underline)
3. Email with subject/body
4. Phone number formatting
5. Hashtags & mentions
6. Domain-specific styling
7. URL truncation
8. Security & sanitization
9. `useLinkify` hook
10. Advanced callbacks

**Run it:**
```bash
npm run dev
# Opens at http://localhost:3000
```

### `react-examples.tsx`
Basic React component examples:
- Using `<SmartLinkify>` component
- Props and options
- Simple styling
- Children patterns

### `advanced-examples.tsx`
Advanced features:
- `useLinkify` hook
- Callback functions
- Domain styling
- Email/phone options
- Security features

### `advanced-comprehensive.tsx`
All features in one file:
- Complete feature showcase
- All 40+ options demonstrated
- Copy-paste ready examples

## 🚀 Usage

### Import Components

```tsx
import { SmartLinkify, useLinkify } from '@smart-linkify/react';
```

### Component Example

```tsx
function MyComponent() {
  return (
    <SmartLinkify 
      options={{ 
        color: '#0066cc',
        target: '_blank',
        bold: true 
      }}
    >
      Visit https://example.com for more info!
    </SmartLinkify>
  );
}
```

### Hook Example

```tsx
function MyHookComponent() {
  const [text, setText] = useState('Visit https://example.com');
  const linkifiedHtml = useLinkify(text, {
    color: '#0066cc',
    target: '_blank'
  });
  
  return <div dangerouslySetInnerHTML={{ __html: linkifiedHtml }} />;
}
```

## 📦 Install in Your Project

```bash
npm install @smart-linkify/react
```

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@smart-linkify/react)
- [Documentation](https://github.com/avinashReddiDev/smart-linkify#readme)
- [Back to Examples](../README.md)
