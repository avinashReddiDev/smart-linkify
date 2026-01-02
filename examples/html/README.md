# HTML Demo Examples

Standalone HTML files that work without any build step. Just open in a browser!

## 📂 Files

### `demo.html` ⭐ **Simplest Example**
Basic demo using CDN:
- No installation required
- No build step needed
- Just open in browser
- Perfect for quick testing

**Try it:**
```bash
open demo.html
# or double-click the file
```

### `demo-comprehensive.html`
Complete feature demo:
- All features demonstrated
- Interactive examples
- Styled output
- CDN-based

### `showcase.html`
Full interactive showcase:
- 6 demo cards
- 8 preset examples
- Interactive playground
- Loading animations
- Professional styling

## 🚀 Usage

### Option 1: Open Directly
```bash
# Just open in browser
open demo.html

# Or
open demo-comprehensive.html

# Or
open showcase.html
```

### Option 2: Local Server
```bash
# If you have Python
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Then open http://localhost:8000/html/demo.html
```

## 📝 How It Works

All demos use the CDN version of Smart Linkify:

```html
<script type="module">
  import { linkify } from 'https://cdn.jsdelivr.net/npm/@smart-linkify/core/+esm';
  
  const html = linkify('Visit https://example.com', {
    color: '#0066cc',
    target: '_blank'
  });
  
  document.getElementById('output').innerHTML = html;
</script>
```

## 🎯 Use Cases

### Quick Prototype
Use `demo.html` to quickly test the library:
```bash
cp demo.html my-test.html
# Edit my-test.html and open in browser
```

### Documentation
Embed `showcase.html` in your docs:
```html
<iframe src="showcase.html" width="100%" height="600"></iframe>
```

### Learning
Study `demo-comprehensive.html` to understand all features:
- View source to see implementation
- Modify and refresh browser
- No build step slows you down

## 🔧 Customization

### Add Your Own Examples

Edit any HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Custom Demo</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 2rem; }
    .output { margin-top: 1rem; padding: 1rem; background: #f5f5f5; }
  </style>
</head>
<body>
  <h1>My Smart Linkify Demo</h1>
  <div id="output"></div>
  
  <script type="module">
    import { linkify } from 'https://cdn.jsdelivr.net/npm/@smart-linkify/core/+esm';
    
    const text = 'Visit https://example.com and email hello@example.com';
    const html = linkify(text, {
      color: '#0066cc',
      target: '_blank',
      bold: true
    });
    
    document.getElementById('output').innerHTML = html;
  </script>
</body>
</html>
```

## 📦 CDN Options

### jsDelivr (Recommended)
```html
<script type="module">
  import { linkify } from 'https://cdn.jsdelivr.net/npm/@smart-linkify/core/+esm';
</script>
```

### unpkg
```html
<script type="module">
  import { linkify } from 'https://unpkg.com/@smart-linkify/core?module';
</script>
```

### esm.sh
```html
<script type="module">
  import { linkify } from 'https://esm.sh/@smart-linkify/core';
</script>
```

## 🎨 Features in Demos

✅ URL detection  
✅ Email addresses  
✅ Phone numbers  
✅ Custom styling  
✅ Hashtags & mentions  
✅ Interactive playground  
✅ Live examples  
✅ No build required  

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@smart-linkify/core)
- [Documentation](https://github.com/avinashReddiDev/smart-linkify#readme)
- [Back to Examples](../README.md)
