# Vanilla JavaScript Examples

Plain JavaScript examples without any framework dependencies.

## 📂 Files

### `vanilla.js` ⭐ **Start Here**
Basic examples:
- Simple URL linkification
- Email detection
- Phone numbers
- Custom styling
- Multiple options

### `vanilla-advanced.js`
Advanced features:
- Email subject/body
- Phone formatting
- Hashtags & mentions
- Domain styling
- Truncation
- Callbacks

### `vanilla-comprehensive.js`
Complete feature showcase:
- All 40+ options
- Security features
- Complex examples
- Production-ready code

## 🚀 Usage

### Install

```bash
npm install @smart-linkify/core
```

### Basic Example

```javascript
import { linkify } from '@smart-linkify/core';

// Simple usage
const html = linkify('Visit https://example.com');
console.log(html);
// Output: Visit <a href="https://example.com" ...>https://example.com</a>

// With options
const styledHtml = linkify('Visit https://example.com', {
  color: '#0066cc',
  target: '_blank',
  className: 'my-link',
  bold: true
});

// Update DOM
document.getElementById('output').innerHTML = styledHtml;
```

### Advanced Example

```javascript
import { linkify } from '@smart-linkify/core';

const text = 'Email hello@example.com or call 5551234567';

const html = linkify(text, {
  // Email options
  emailSubject: 'Contact Request',
  emailBody: 'Hello, I would like to...',
  
  // Phone options
  phoneFormat: '(###) ###-####',
  phoneCountryCode: '+1',
  
  // Styling
  color: '#0066cc',
  bold: true,
  
  // Security
  sanitizeInput: true,
  
  // Callbacks
  transformUrl: (url) => url.toLowerCase(),
  onLinkClick: (e, url) => console.log('Clicked:', url)
});

document.body.innerHTML = html;
```

### CDN Usage (No Build Step)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Smart Linkify Example</title>
</head>
<body>
  <div id="output"></div>
  
  <script type="module">
    import { linkify } from 'https://cdn.jsdelivr.net/npm/@smart-linkify/core/+esm';
    
    const html = linkify('Visit https://example.com and email hello@example.com', {
      color: '#0066cc',
      target: '_blank'
    });
    
    document.getElementById('output').innerHTML = html;
  </script>
</body>
</html>
```

## 🎯 Common Use Cases

### Vue.js

```vue
<script setup>
import { ref, computed } from 'vue';
import { linkify } from '@smart-linkify/core';

const text = ref('Visit https://example.com');
const html = computed(() => linkify(text.value, {
  color: '#0066cc',
  target: '_blank'
}));
</script>

<template>
  <div v-html="html"></div>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { linkify } from '@smart-linkify/core';

@Component({
  selector: 'app-linkify',
  template: '<div [innerHTML]="html"></div>'
})
export class LinkifyComponent {
  html: any;
  
  constructor(private sanitizer: DomSanitizer) {
    const result = linkify('Visit https://example.com', {
      color: '#0066cc'
    });
    this.html = this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
```

### Svelte

```svelte
<script>
  import { linkify } from '@smart-linkify/core';
  
  let text = 'Visit https://example.com';
  $: html = linkify(text, {
    color: '#0066cc',
    target: '_blank'
  });
</script>

{@html html}
```

## 📦 Run Examples

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Examples will be at localhost:3000
```

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@smart-linkify/core)
- [Documentation](https://github.com/avinashReddiDev/smart-linkify#readme)
- [Back to Examples](../README.md)
