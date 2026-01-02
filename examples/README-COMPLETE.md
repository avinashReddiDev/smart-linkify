# 🔗 Smart Linkify Examples

Complete example collection demonstrating all 40+ features and options of Smart Linkify.

## 📁 Files Overview

### HTML Examples (No Build Required!)
- **`demo-comprehensive.html`** - 🌟 **NEW!** Complete interactive demo with 20 examples
  - Interactive playground with live editing
  - 8 preset options to toggle
  - 20 categorized examples across 7 categories
  - Modern gradient design with cards
  - **Just open in browser - no build needed!**

- `demo.html` - Original HTML demo (basic examples)

### Vanilla JavaScript Examples
- **`vanilla-comprehensive.js`** - 🌟 **NEW!** All 30+ examples showcasing every feature
  - All URL, email, phone detection
  - All social media features (hashtags, mentions)
  - All security features (tracking removal, blocklist)
  - All styling options
  - All 14 presets
  - DOM integration example
  
- `vanilla.js` - Basic vanilla JavaScript examples (10 examples)
- `vanilla-advanced.js` - Advanced patterns (original, 210 lines)

### React/TypeScript Examples
- **`react-examples.tsx`** - ✨ **UPDATED!** 24 React component examples
  - All detection features (URL, email, phone, hashtag, mention)
  - Real-world components (ChatMessage, Comment, UserBio, BlogPost, SupportTicket)
  - All presets demonstrated
  - Complete application example with styled sections
  
- **`advanced-comprehensive.tsx`** - 🌟 **NEW!** Complete advanced React showcase
  - useLinkify hook with state management
  - Advanced callbacks (onClick, onHover, beforeLinkify, afterLinkify)
  - Performance optimization with memoization
  - Custom URL transformation
  - All 40+ options demonstrated
  - Real-world dashboard with tabs
  - Complete accessibility examples
  
- `advanced-examples.tsx` - Original advanced examples

## 🚀 Quick Start

### 1. HTML Demo (Easiest - Recommended!)

Just open the file in your browser:

```bash
open examples/demo-comprehensive.html
# or double-click the file
```

**What you'll see:**
- Interactive playground - type and see links appear instantly
- 8 preset buttons to try different configurations
- 20 examples organized into categories:
  - URL Detection (basic, styling, truncation)
  - Contact (email, phone, combined)
  - Social Media (hashtags, mentions, posts)
  - Security (tracking removal, blocklist, allowlist)
  - Advanced Styling (domain-specific, icons, ARIA)
  - Real-World (blog comments, support tickets, marketing)
- Stats dashboard: 40+ options, 14 presets, 118 tests, 0 dependencies

### 2. Vanilla JavaScript

```bash
# Install dependencies first (from root)
cd /Users/avinash.reddi/smart-linkify/smart-linkify
npm install

# Run comprehensive examples
node examples/vanilla-comprehensive.js

# Or run basic examples
node examples/vanilla.js
```

**Output:** Console logs showing 30+ examples with formatted output

### 3. React/TypeScript

Import components into your React app:

```tsx
// Basic examples
import { 
  BasicExample,
  EmailExample,
  PhoneExample,
  HashtagExample,
  MentionExample,
  SocialPostExample,
  TruncationExample,
  SecurityExample,
  DomainFilterExample,
  DomainStyleExample,
  IconsExample,
  AccessibilityExample,
  PresetExample
} from './examples/react-examples';

// Real-world components
import {
  ChatMessage,
  Comment,
  UserBio,
  BlogPostPreview,
  MobileFriendlyLink,
  SupportTicket,
  NewsletterContent,
  DocumentationLink
} from './examples/react-examples';

// Complete app
import App from './examples/react-examples';

function MyApp() {
  return (
    <div>
      <BasicExample />
      <EmailExample />
      <SocialPostExample />
      
      <ChatMessage 
        username="Alice" 
        message="Check out github.com/user/repo #opensource" 
      />
      
      <Comment 
        author="John"
        text="Great article at myblog.com! #webdev"
        timestamp="2 hours ago"
      />
    </div>
  );
}
```

For advanced patterns:

```tsx
// Advanced examples
import { 
  InteractiveEditor,           // useLinkify hook with state
  CallbackExample,             // onClick, onHover, beforeLinkify
  OptimizedComponent,          // Performance with memoization
  CustomTransformExample,      // URL transformation
  ComprehensiveEmailExample,   // All email options
  ComprehensivePhoneExample,   // All phone options
  ComprehensiveSocialExample,  // All social options
  ComprehensiveSecurityExample,// All security options
  ComprehensiveStylingExample, // All styling options
  ComprehensiveTruncationExample, // All truncation options
  ComprehensiveAccessibilityExample, // All a11y options
  AllPresetsExample,           // All 14 presets
  RealWorldDashboard           // Complete dashboard
} from './examples/advanced-comprehensive';

// Complete advanced app
import AdvancedApp from './examples/advanced-comprehensive';
```

## 📚 Example Categories

### 1. 🔗 URL Detection
**Files:** All files  
**Examples:**
- Basic URL linkification (http, https, www)
- Custom colors and styling
- URL truncation (end, middle, smart strategies)
- Domain-specific styling with icons
- Show full URL on hover

**Try:**
```javascript
linkify('Visit https://github.com')
linkify('Check www.npmjs.com', { color: '#cb3837' })
linkify('https://example.com/very/long/url', { maxLength: 30, truncateStrategy: 'middle' })
```

### 2. ✉️ Contact Detection
**Files:** All files  
**Examples:**
- Email detection with mailto: links
- Phone detection with tel: links
- Combined contact information
- International phone formats
- Email with subject and body

**Try:**
```javascript
linkify('Email hello@example.com', { detectEmails: true })
linkify('Call (555) 123-4567', { detectPhones: true })
linkify('UK: +44 20 7946 0958', { detectPhones: true, phoneCountryCode: '+44' })
```

### 3. 🏷️ Social Media
**Files:** All files  
**Examples:**
- Hashtag detection (#javascript)
- Mention detection (@username)
- Complete social media posts
- Custom URL patterns for platforms
- Allowlist filtering

**Try:**
```javascript
linkify('#javascript #typescript', {
  detectHashtags: true,
  hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`
})

linkify('@github @npmjs', {
  detectMentions: true,
  mentionUrl: (user) => `https://twitter.com/${user}`
})
```

### 4. 🔒 Security Features
**Files:** All files  
**Examples:**
- Remove tracking parameters (utm_*, fbclid, gclid, etc.)
- Domain blocklist (block malicious sites)
- Domain allowlist (only allow specific domains)
- Input sanitization and XSS protection
- Combined security features

**Try:**
```javascript
linkify('https://example.com?utm_source=spam&fbclid=123', {
  removeTracking: true
})

linkify('Safe: github.com, Blocked: malicious.com', {
  blocklist: ['malicious.com', 'spam.com']
})

linkify('Only: github.com, npmjs.com, Other: random.com', {
  allowlist: ['github.com', 'npmjs.com']
})
```

### 5. 🎨 Styling Options
**Files:** All files  
**Examples:**
- Color customization
- Custom CSS classes
- Icons (before/after)
- Domain-specific icons and colors
- Custom styles object
- Bold, italic, underline

**Try:**
```javascript
linkify('https://example.com', {
  color: '#e74c3c',
  bold: true,
  underline: true,
  iconBefore: '🔗 '
})

linkify('github.com npmjs.com', {
  domainStyles: {
    'github.com': { icon: '🐙 ', color: '#333' },
    'npmjs.com': { icon: '📦 ', color: '#cb3837' }
  }
})
```

### 6. ♿ Accessibility
**Files:** All files  
**Examples:**
- ARIA labels
- Screen reader text
- Keyboard navigation (tabIndex)
- Semantic HTML (role attributes)
- Complete accessibility setup

**Try:**
```javascript
linkify('https://docs.example.com', {
  ariaLabel: 'Link to documentation',
  screenReaderText: 'Opens in new window',
  target: '_blank',
  tabIndex: 0,
  role: 'link'
})
```

### 7. ⚛️ Advanced Patterns
**Files:** `advanced-comprehensive.tsx`, `advanced-examples.tsx`  
**Examples:**
- React hooks (useLinkify)
- Callbacks (onLinkClick, onLinkHover, beforeLinkify, afterLinkify)
- Custom URL transformation
- Performance optimization (memoization)
- Error handling
- Real-world applications

**Try:**
```tsx
// useLinkify hook
const [text, setText] = useState('Visit https://github.com');
const linkedText = useLinkify(text, { color: '#0066cc' });

// Callbacks
linkify('https://github.com', {
  onLinkClick: (url, event) => {
    event.preventDefault();
    console.log('Clicked:', url);
  },
  beforeLinkify: (url) => {
    // Validate or transform URL
    return url;
  }
})
```

## 🎨 All 14 Presets

| Preset | Features | Best For |
|--------|----------|----------|
| **default** | Standard configuration | General use |
| **minimal** | Clean, simple styling | Documentation |
| **social** | Hashtags + mentions + social colors | Social media posts |
| **professional** | Formal styling, external icon | Business websites |
| **secure** | Removes tracking, security focus | Privacy-focused sites |
| **compact** | Truncates long URLs | Mobile, tight spaces |
| **email** | Email detection enabled | Newsletters, email content |
| **contact** | Email + phone detection | Contact information |
| **github** | GitHub-optimized styling | Code repositories |
| **inline** | Minimal inline styling | Text paragraphs |
| **mobile** | Touch-friendly, larger targets | Mobile applications |
| **documentation** | Clean docs styling | Technical documentation |
| **marketing** | Eye-catching styling | Marketing content |
| **accessibility** | Full ARIA + screen reader | Accessible websites |

**Usage:**
```javascript
import { presets } from '@smart-linkify/core';

linkify('Visit example.com #test @user', presets.social);
linkify('Email hello@example.com', presets.contact);
linkify('https://example.com?utm_source=test', presets.secure);
```

## 📊 Library Statistics

- ✅ **40+ Configuration Options** - Maximum flexibility
- ✅ **14 Built-in Presets** - Ready to use
- ✅ **118 Tests Passing** - 100% test coverage
- ✅ **0 Dependencies** - Lightweight and fast
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **10.69 KB** - Core package (ESM, minified)
- ✅ **968 B** - React package (ESM, minified)
- ✅ **ReDoS Protected** - Security hardened

## 🎯 Real-World Component Examples

### Chat Application
```tsx
<ChatMessage 
  username="Alice"
  message="Check out my project at github.com/alice/project #opensource @bob"
/>
```

### Blog Comment Section
```tsx
<Comment
  author="John Doe"
  text="Great article! I wrote something similar at myblog.com/post. Email me at john@example.com. #webdev"
  timestamp="2 hours ago"
/>
```

### User Profile Bio
```tsx
<UserBio 
  bio="Software developer | Website: example.com | GitHub: github.com/johndoe | Email: john@example.com" 
/>
```

### Blog Post Preview
```tsx
<BlogPostPreview
  title="Introduction to Smart Linkify"
  excerpt="Learn how to transform plain text into interactive links. Check out #javascript #webdev for more."
  url="blog.example.com/smart-linkify-intro"
/>
```

### Support Ticket System
```tsx
<SupportTicket
  ticketId="12345"
  description="Having issues with API endpoint api.example.com/v1/users. Please email support@example.com or call (555) 123-4567 for urgent assistance."
/>
```

### Newsletter Content
```tsx
<NewsletterContent
  content="New features released! Check them out at example.com/features. Questions? Email newsletter@example.com. Follow us @example for updates!"
/>
```

## 🔍 Complete Feature List

### URL Detection
- ✅ http/https URLs
- ✅ www prefixed URLs
- ✅ URLs without protocol
- ✅ Custom URL patterns
- ✅ URL transformation
- ✅ URL validation

### Contact Detection
- ✅ Email addresses
- ✅ Phone numbers (various formats)
- ✅ International phone numbers
- ✅ Email with subject/body
- ✅ Domain filtering for emails
- ✅ Phone format customization

### Social Media
- ✅ Hashtag detection
- ✅ Mention/username detection
- ✅ Custom URL patterns
- ✅ Allowlist filtering
- ✅ Custom prefixes/icons
- ✅ Color customization

### Security
- ✅ Remove tracking parameters
- ✅ Domain blocklist
- ✅ Domain allowlist
- ✅ Input sanitization
- ✅ XSS protection
- ✅ ReDoS protection

### Styling
- ✅ Custom colors
- ✅ CSS classes
- ✅ Bold/italic/underline
- ✅ Custom styles object
- ✅ Icons (before/after)
- ✅ Domain-specific styling

### Truncation
- ✅ End truncation
- ✅ Middle truncation
- ✅ Smart truncation
- ✅ Custom truncate text
- ✅ Show full on hover
- ✅ Max length control

### Accessibility
- ✅ ARIA labels
- ✅ Screen reader text
- ✅ Keyboard navigation
- ✅ Semantic HTML
- ✅ Role attributes
- ✅ Tab index control

### Advanced
- ✅ Custom callbacks
- ✅ URL transformation
- ✅ Before/after hooks
- ✅ React hooks (useLinkify)
- ✅ Performance optimization
- ✅ Error handling

## 🛠️ Development

To modify or test examples:

```bash
# Install dependencies
npm install

# Build packages
npm run build

# Run tests
npm test

# Type check
npm run type-check

# Run vanilla examples
node examples/vanilla-comprehensive.js

# Open HTML demo
open examples/demo-comprehensive.html
```

## 📖 Documentation Links

- [Main README](../README.md) - Getting started and overview
- [Core Package](../packages/core/README.md) - Core API documentation
- [React Package](../packages/react/README.md) - React components
- [Package Overview](../PACKAGE_OVERVIEW.md) - Architecture details
- [Publishing Guide](../PUBLISHING_GUIDE.md) - How to publish updates
- [Contributing](../CONTRIBUTING.md) - Contribution guidelines

## 💡 Tips

1. **Start with HTML demo** - No build required, instant preview
2. **Use presets first** - 14 ready-made configurations
3. **Check console examples** - Run vanilla-comprehensive.js for all features
4. **Copy React components** - Real-world components ready to use
5. **Refer to tests** - 118 tests show all edge cases

## 🤝 Contributing

Found a bug or want to add an example? See [CONTRIBUTING.md](../CONTRIBUTING.md)

## 📄 License

MIT © 2026 Avinash Reddi

---

<div align="center">

**Need help?** [Open an issue](https://github.com/avinashReddiDev/smart-linkify/issues) • [View on npm](https://www.npmjs.com/package/@smart-linkify/core)

Made with ❤️ by the Smart Linkify team

</div>
