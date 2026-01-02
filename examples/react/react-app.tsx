import React from 'react';
import ReactDOM from 'react-dom/client';
import { SmartLinkify, useLinkify } from '@smart-linkify/react';
import '../styles.css';

// Example 1: Basic Usage
function BasicExample() {
  return (
    <div className="example-card">
      <h2>1. Basic Usage</h2>
      <SmartLinkify>
        Visit https://github.com or email hello@example.com for more info!
      </SmartLinkify>
    </div>
  );
}

// Example 2: Custom Styling
function StyledExample() {
  return (
    <div className="example-card">
      <h2>2. Custom Styling</h2>
      <SmartLinkify
        options={{
          color: '#0066cc',
          bold: true,
          underline: false,
          target: '_blank',
        }}
      >
        Check out https://react.dev and https://typescript.org
      </SmartLinkify>
    </div>
  );
}

// Example 3: Email with Subject/Body
function EmailExample() {
  return (
    <div className="example-card">
      <h2>3. Email with Subject & Body</h2>
      <SmartLinkify
        options={{
          emailSubject: 'Hello from Smart Linkify',
          emailBody: 'I found your email in the demo!',
          color: '#d63384',
        }}
      >
        Contact support@company.com for assistance
      </SmartLinkify>
    </div>
  );
}

// Example 4: Phone Numbers
function PhoneExample() {
  return (
    <div className="example-card">
      <h2>4. Phone Number Formatting</h2>
      <SmartLinkify
        options={{
          phoneFormat: '(###) ###-####',
          phoneCountryCode: '+1',
          color: '#198754',
        }}
      >
        Call us at 5551234567 or 8005551234
      </SmartLinkify>
    </div>
  );
}

// Example 5: Hashtags & Mentions
function SocialExample() {
  return (
    <div className="example-card">
      <h2>5. Hashtags & Mentions</h2>
      <SmartLinkify
        options={{
          hashtagColor: '#1da1f2',
          mentionColor: '#e1306c',
          hashtagPrefix: 'https://twitter.com/hashtag/',
          mentionPrefix: 'https://twitter.com/',
        }}
      >
        Follow @github and check out #typescript #react #webdev
      </SmartLinkify>
    </div>
  );
}

// Example 6: Domain-Specific Styling
function DomainStylingExample() {
  return (
    <div className="example-card">
      <h2>6. Domain-Specific Styling</h2>
      <SmartLinkify
        options={{
          domainStyles: {
            'github.com': { color: '#24292f', bold: true },
            'twitter.com': { color: '#1da1f2', italic: true },
            'youtube.com': { color: '#ff0000', underline: true },
          },
        }}
      >
        Visit https://github.com, https://twitter.com, and https://youtube.com
      </SmartLinkify>
    </div>
  );
}

// Example 7: Truncation
function TruncationExample() {
  return (
    <div className="example-card">
      <h2>7. URL Truncation</h2>
      <SmartLinkify
        options={{
          maxLength: 30,
          showFullOnHover: true,
          color: '#6610f2',
        }}
      >
        Long URL: https://example.com/very/long/path/to/some/resource/that/should/be/truncated
      </SmartLinkify>
    </div>
  );
}

// Example 8: Security Features
function SecurityExample() {
  return (
    <div className="example-card">
      <h2>8. Security & Sanitization</h2>
      <SmartLinkify
        options={{
          sanitizeInput: true,
          allowedTags: ['b', 'i'],
          rel: 'noopener noreferrer',
          target: '_blank',
        }}
      >
        Safe text with &lt;script&gt;alert('xss')&lt;/script&gt; and <b>bold</b> text. Visit https://example.com
      </SmartLinkify>
    </div>
  );
}

// Example 9: useLinkify Hook
function HookExample() {
  const [text, setText] = React.useState(
    'Visit https://react.dev and email hello@example.com'
  );
  const linkifiedHtml = useLinkify(text, {
    color: '#0d6efd',
    target: '_blank',
  });

  return (
    <div className="example-card">
      <h2>9. useLinkify Hook</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type URLs, emails, or phone numbers..."
        rows={3}
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      <div dangerouslySetInnerHTML={{ __html: linkifiedHtml }} />
    </div>
  );
}

// Example 10: Advanced Features
function AdvancedExample() {
  const [clicks, setClicks] = React.useState(0);

  return (
    <div className="example-card">
      <h2>10. Advanced: Callbacks & Custom Styles</h2>
      <p>Link clicks: {clicks}</p>
      <SmartLinkify
        options={{
          transformUrl: (url) => url.toLowerCase(),
          onLinkClick: (e, url) => {
            setClicks((c) => c + 1);
            console.log('Clicked:', url);
          },
          customStyles: {
            backgroundColor: '#fff3cd',
            padding: '2px 6px',
            borderRadius: '4px',
            transition: 'all 0.2s',
          },
          bold: true,
        }}
      >
        Click these links: https://EXAMPLE.com and https://GITHUB.COM
      </SmartLinkify>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🔗 Smart Linkify - React Examples</h1>
        <p>Interactive examples demonstrating all features</p>
        <div className="badges">
          <a href="https://www.npmjs.com/package/@smart-linkify/react" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/npm/v/@smart-linkify/react.svg" alt="npm version" />
          </a>
          <a href="https://github.com/avinashReddiDev/smart-linkify" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/stars/avinashReddiDev/smart-linkify.svg" alt="GitHub stars" />
          </a>
        </div>
      </header>

      <div className="examples-grid">
        <BasicExample />
        <StyledExample />
        <EmailExample />
        <PhoneExample />
        <SocialExample />
        <DomainStylingExample />
        <TruncationExample />
        <SecurityExample />
        <HookExample />
        <AdvancedExample />
      </div>

      <footer className="footer">
        <p>
          📚 <a href="https://github.com/avinashReddiDev/smart-linkify#readme" target="_blank" rel="noopener noreferrer">Documentation</a>
          {' • '}
          💻 <a href="https://github.com/avinashReddiDev/smart-linkify" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' • '}
          📦 <a href="https://www.npmjs.com/package/@smart-linkify/react" target="_blank" rel="noopener noreferrer">npm</a>
        </p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
