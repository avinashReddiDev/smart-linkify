import React, { useState, useMemo, useCallback } from 'react';
import { SmartLinkify, useLinkify } from '@smart-linkify/react';
import { linkify, presets, type LinkifyOptions } from '@smart-linkify/core';

/**
 * Comprehensive Advanced React Examples showcasing all 40+ Smart Linkify options
 * This file demonstrates advanced patterns, hooks, callbacks, and real-world applications
 */

// Example 1: useLinkify Hook with State Management
export function InteractiveEditor() {
  const [text, setText] = useState('Visit https://github.com and check #opensource projects!');
  const [options, setOptions] = useState<LinkifyOptions>({
    detectHashtags: true,
    detectMentions: true,
    color: '#1da1f2',
  });

  const linkedText = useLinkify(text, options);

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Interactive Editor with useLinkify Hook</h2>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '15px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '2px solid #e9ecef',
          fontFamily: 'inherit',
          marginBottom: '20px',
        }}
        placeholder="Enter text with URLs, emails, hashtags..."
      />

      <div style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #dee2e6',
      }}>
        <div dangerouslySetInnerHTML={{ __html: linkedText }} />
      </div>

      <div style={{ marginTop: '20px' }}>
        <label>
          <input
            type="checkbox"
            checked={options.detectHashtags}
            onChange={(e) => setOptions({ ...options, detectHashtags: e.target.checked })}
          />
          {' '}Detect Hashtags
        </label>
        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={options.detectMentions}
            onChange={(e) => setOptions({ ...options, detectMentions: e.target.checked })}
          />
          {' '}Detect Mentions
        </label>
      </div>
    </div>
  );
}

// Example 2: Advanced Callbacks
export function CallbackExample() {
  const [clickedLink, setClickedLink] = useState<string>('');
  const [hoverLink, setHoverLink] = useState<string>('');

  const options: LinkifyOptions = {
    onLinkClick: (url: string, event: Event) => {
      event.preventDefault();
      setClickedLink(url);
      console.log('Clicked:', url);
    },
    onLinkHover: (url: string) => {
      setHoverLink(url);
    },
    beforeLinkify: (url: string) => {
      if (url.includes('dangerous')) {
        return null; // Skip this URL
      }
      return url;
    },
    afterLinkify: (html: string) => {
      return `<div class="linkified-content">${html}</div>`;
    },
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Advanced Callbacks</h2>
      
      <SmartLinkify
        text="Click on https://github.com or hover over https://npmjs.com. This dangerous.com will be skipped."
        options={options}
      />

      <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
        <p><strong>Last Clicked:</strong> {clickedLink || 'None'}</p>
        <p><strong>Hovering Over:</strong> {hoverLink || 'None'}</p>
      </div>
    </div>
  );
}

// Example 3: Performance Optimization with Memoization
export function OptimizedComponent({ messages }: { messages: Array<{ id: number; text: string }> }) {
  const linkifyOptions = useMemo(
    () => ({
      color: '#0066cc',
      detectEmails: true,
      detectHashtags: true,
      removeTracking: true,
    }),
    []
  );

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Performance Optimized (Memoization)</h2>
      <p style={{ color: '#666' }}>Using useMemo to prevent unnecessary re-linkification</p>
      
      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            padding: '15px',
            margin: '10px 0',
            background: '#f8f9fa',
            borderRadius: '8px',
          }}
        >
          <SmartLinkify text={msg.text} options={linkifyOptions} />
        </div>
      ))}
    </div>
  );
}

// Example 4: Custom URL Transformation
export function CustomTransformExample() {
  const options: LinkifyOptions = {
    transformUrl: (url: string) => {
      const urlObj = new URL(url);
      urlObj.searchParams.set('ref', 'myapp');
      return urlObj.toString();
    },
    beforeLinkify: (url: string) => {
      if (url.startsWith('github.com')) {
        return `https://${url}`;
      }
      return url;
    },
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>Custom URL Transformation</h2>
      <SmartLinkify
        text="Visit github.com/user/repo or https://example.com"
        options={options}
      />
      <p style={{ color: '#666', fontSize: '0.9em', marginTop: '10px' }}>
        Adds ?ref=myapp to all URLs and normalizes github.com links
      </p>
    </div>
  );
}

// Example 5: All Email Options
export function ComprehensiveEmailExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Email Detection Features</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Basic Email Detection</h3>
        <SmartLinkify
          text="Email: hello@example.com, support@company.org, admin@test.co.uk"
          options={{
            detectEmails: true,
            emailPrefix: 'mailto:',
            color: '#e74c3c',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Email with Custom Subject</h3>
        <SmartLinkify
          text="Contact: support@example.com"
          options={{
            detectEmails: true,
            emailSubject: 'Question from Website',
            emailBody: 'Hello, I have a question about...',
            color: '#e74c3c',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Email with Domain Filter</h3>
        <SmartLinkify
          text="Valid: team@company.com, Invalid: spam@blocked.com"
          options={{
            detectEmails: true,
            emailDomainAllowlist: ['company.com'],
            color: '#27ae60',
          }}
        />
      </div>
    </div>
  );
}

// Example 6: All Phone Options
export function ComprehensivePhoneExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Phone Detection Features</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Various Phone Formats</h3>
        <SmartLinkify
          text="Call: (555) 123-4567, +1-555-987-6543, 555.123.4567, or 5551234567"
          options={{
            detectPhones: true,
            phonePrefix: 'tel:',
            color: '#3498db',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>International Phones</h3>
        <SmartLinkify
          text="UK: +44 20 7946 0958, US: +1 (555) 123-4567, India: +91 98765 43210"
          options={{
            detectPhones: true,
            phoneCountryCode: '+1',
            color: '#3498db',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Phone with Custom Format</h3>
        <SmartLinkify
          text="Support: 555-123-4567"
          options={{
            detectPhones: true,
            phoneFormat: '(###) ###-####',
            color: '#3498db',
          }}
        />
      </div>
    </div>
  );
}

// Example 7: All Hashtag & Mention Options
export function ComprehensiveSocialExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Social Media Features</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Hashtags with Custom URL</h3>
        <SmartLinkify
          text="#javascript #typescript #react #webdev #opensource"
          options={{
            detectHashtags: true,
            hashtagUrl: (tag: string) => `https://twitter.com/hashtag/${tag}`,
            hashtagPrefix: '🏷️ ',
            color: '#1da1f2',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Mentions with Custom URL</h3>
        <SmartLinkify
          text="Follow @github @npmjs @nodejs @typescript for updates!"
          options={{
            detectMentions: true,
            mentionUrl: (user: string) => `https://twitter.com/${user}`,
            mentionPrefix: '👤 ',
            color: '#1da1f2',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Complete Social Post</h3>
        <SmartLinkify
          text="Just released v2.0! 🚀 github.com/user/repo #opensource #javascript Follow @developer for updates"
          options={{
            detectHashtags: true,
            detectMentions: true,
            hashtagUrl: (tag: string) => `https://twitter.com/hashtag/${tag}`,
            mentionUrl: (user: string) => `https://twitter.com/${user}`,
            hashtagColor: '#1da1f2',
            mentionColor: '#1da1f2',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>With Allowlist</h3>
        <SmartLinkify
          text="Allowed: @github @npmjs, Filtered: @spam @blocked"
          options={{
            detectMentions: true,
            mentionAllowlist: ['github', 'npmjs'],
            mentionUrl: (user: string) => `https://twitter.com/${user}`,
            color: '#1da1f2',
          }}
        />
      </div>
    </div>
  );
}

// Example 8: All Security Features
export function ComprehensiveSecurityExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Security Features</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Remove Tracking Parameters</h3>
        <SmartLinkify
          text="https://example.com?utm_source=twitter&utm_medium=social&fbclid=abc123&gclid=xyz789"
          options={{
            removeTracking: true,
            color: '#27ae60',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Domain Blocklist</h3>
        <SmartLinkify
          text="Safe: example.com, Blocked: malicious.com, spam.org"
          options={{
            blocklist: ['malicious.com', 'spam.org', 'phishing.net'],
            color: '#e74c3c',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Domain Allowlist (Whitelist)</h3>
        <SmartLinkify
          text="Allowed: github.com, npmjs.com, Not allowed: random.com"
          options={{
            allowlist: ['github.com', 'npmjs.com', 'stackoverflow.com'],
            color: '#27ae60',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Input Sanitization</h3>
        <SmartLinkify
          text='<script>alert("xss")</script> Visit https://example.com with <strong>safe</strong> HTML'
          options={{
            sanitizeInput: true,
            allowedTags: ['strong', 'em'],
            color: '#f39c12',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Combined Security</h3>
        <SmartLinkify
          text="Visit github.com?utm_source=email&fbclid=123 or malicious.com"
          options={{
            removeTracking: true,
            blocklist: ['malicious.com'],
            sanitizeInput: true,
            color: '#27ae60',
          }}
        />
      </div>
    </div>
  );
}

// Example 9: All Styling Options
export function ComprehensiveStylingExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Styling Options</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Basic Styling</h3>
        <SmartLinkify
          text="Visit https://example.com"
          options={{
            color: '#e74c3c',
            underline: true,
            bold: true,
            italic: false,
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Custom Class & Target</h3>
        <SmartLinkify
          text="Open https://example.com in new tab"
          options={{
            className: 'custom-link-class',
            target: '_blank',
            rel: 'noopener noreferrer',
            color: '#3498db',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Icons & Prefixes</h3>
        <SmartLinkify
          text="Check out https://github.com and https://npmjs.com"
          options={{
            iconBefore: '🔗 ',
            iconAfter: ' →',
            color: '#9b59b6',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Domain-Specific Styling</h3>
        <SmartLinkify
          text="Visit github.com, npmjs.com, and stackoverflow.com"
          options={{
            domainStyles: {
              'github.com': { icon: '🐙 ', color: '#333', bold: true },
              'npmjs.com': { icon: '📦 ', color: '#cb3837', underline: true },
              'stackoverflow.com': { icon: '📚 ', color: '#f48024', italic: true },
            },
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Custom Styles Object</h3>
        <SmartLinkify
          text="Styled link: https://example.com"
          options={{
            customStyles: {
              padding: '5px 10px',
              background: '#f8f9fa',
              borderRadius: '4px',
              textDecoration: 'none',
            },
            color: '#495057',
          }}
        />
      </div>
    </div>
  );
}

// Example 10: All Truncation Options
export function ComprehensiveTruncationExample() {
  const longUrl = 'https://example.com/very/long/path/to/some/resource/file.html?param1=value1&param2=value2';

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Truncation Options</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Original (No Truncation)</h3>
        <SmartLinkify text={longUrl} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>End Truncation</h3>
        <SmartLinkify
          text={longUrl}
          options={{
            maxLength: 40,
            truncateStrategy: 'end',
            truncateText: '...',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Middle Truncation</h3>
        <SmartLinkify
          text={longUrl}
          options={{
            maxLength: 40,
            truncateStrategy: 'middle',
            truncateText: '...',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Smart Truncation (Domain Preserved)</h3>
        <SmartLinkify
          text={longUrl}
          options={{
            maxLength: 40,
            truncateStrategy: 'smart',
            truncateText: '...',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Show Full URL on Hover</h3>
        <SmartLinkify
          text={longUrl}
          options={{
            maxLength: 40,
            truncateStrategy: 'middle',
            showFullOnHover: true,
          }}
        />
      </div>
    </div>
  );
}

// Example 11: All Accessibility Options
export function ComprehensiveAccessibilityExample() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All Accessibility Features</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>ARIA Labels</h3>
        <SmartLinkify
          text="Documentation at https://docs.example.com"
          options={{
            ariaLabel: 'Link to documentation',
            color: '#3498db',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Screen Reader Text</h3>
        <SmartLinkify
          text="External resource: https://example.com"
          options={{
            screenReaderText: 'Opens in new window',
            target: '_blank',
            color: '#3498db',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Keyboard Navigation</h3>
        <SmartLinkify
          text="Navigate to https://example.com"
          options={{
            tabIndex: 0,
            role: 'link',
            color: '#3498db',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Complete Accessibility</h3>
        <SmartLinkify
          text="Visit https://example.com for more information"
          options={{
            ariaLabel: 'Link to example website',
            screenReaderText: 'Opens in new tab',
            target: '_blank',
            rel: 'noopener noreferrer',
            tabIndex: 0,
            role: 'link',
            color: '#3498db',
          }}
        />
      </div>
    </div>
  );
}

// Example 12: All Preset Examples
export function AllPresetsExample() {
  const sampleText = "Visit example.com or email hello@example.com. Check #opensource @github for updates!";

  return (
    <div style={{ padding: '20px', maxWidth: '800px' }}>
      <h2>All 14 Built-in Presets</h2>
      
      {Object.entries(presets).map(([name, preset]) => (
        <div key={name} style={{ marginBottom: '20px' }}>
          <h3 style={{ textTransform: 'capitalize' }}>{name} Preset</h3>
          <div style={{
            padding: '15px',
            background: '#f8f9fa',
            borderRadius: '8px',
            border: '2px solid #dee2e6',
          }}>
            <SmartLinkify text={sampleText} options={preset} />
          </div>
        </div>
      ))}
    </div>
  );
}

// Example 13: Real-World Dashboard
export function RealWorldDashboard() {
  const [activeTab, setActiveTab] = useState<'messages' | 'tickets' | 'feed'>('messages');

  const messages = [
    { id: 1, user: 'Alice', text: 'Check out my project at github.com/alice/project #opensource', time: '5m ago' },
    { id: 2, user: 'Bob', text: 'Email me at bob@example.com for collaboration', time: '15m ago' },
    { id: 3, user: 'Charlie', text: 'Follow @charlie on twitter for updates! #webdev', time: '1h ago' },
  ];

  const tickets = [
    { id: 1001, title: 'API Issue', description: 'Error at api.example.com/v1/users. Contact support@example.com or call (555) 123-4567', status: 'Open' },
    { id: 1002, title: 'Documentation', description: 'Update docs at docs.example.com #documentation', status: 'In Progress' },
  ];

  const feed = [
    { id: 1, content: 'New release available at releases.example.com #update @team', author: 'DevTeam', likes: 42 },
    { id: 2, content: 'Security patch: Read more at blog.example.com/security?utm_source=feed', author: 'Security', likes: 89 },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px' }}>
      <h2 style={{
        fontSize: '2.5em',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '30px',
      }}>
        Real-World Dashboard
      </h2>

      <div style={{ marginBottom: '20px', borderBottom: '2px solid #e9ecef' }}>
        {(['messages', 'tickets', 'feed'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              background: activeTab === tab ? '#667eea' : 'transparent',
              color: activeTab === tab ? 'white' : '#666',
              border: 'none',
              borderRadius: '8px 8px 0 0',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: activeTab === tab ? 600 : 400,
              textTransform: 'capitalize',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'messages' && (
        <div>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                background: 'white',
                padding: '20px',
                margin: '15px 0',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong style={{ color: '#667eea' }}>{msg.user}</strong>
                <span style={{ color: '#999', fontSize: '0.9em' }}>{msg.time}</span>
              </div>
              <SmartLinkify text={msg.text} options={presets.social} />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tickets' && (
        <div>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                background: 'white',
                padding: '20px',
                margin: '15px 0',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #f39c12',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <strong>#{ticket.id}</strong> - {ticket.title}
                </div>
                <span style={{
                  padding: '4px 12px',
                  background: ticket.status === 'Open' ? '#e74c3c' : '#3498db',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '0.85em',
                }}>
                  {ticket.status}
                </span>
              </div>
              <SmartLinkify
                text={ticket.description}
                options={{
                  detectEmails: true,
                  detectPhones: true,
                  detectHashtags: true,
                  color: '#495057',
                }}
              />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'feed' && (
        <div>
          {feed.map((post) => (
            <div
              key={post.id}
              style={{
                background: 'white',
                padding: '20px',
                margin: '15px 0',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#333' }}>{post.author}</strong>
              </div>
              <SmartLinkify
                text={post.content}
                options={{
                  detectHashtags: true,
                  detectMentions: true,
                  removeTracking: true,
                  hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
                  mentionUrl: (user) => `https://twitter.com/${user}`,
                  color: '#667eea',
                }}
              />
              <div style={{ marginTop: '15px', color: '#999' }}>
                ❤️ {post.likes} likes
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Example 14: Main App with All Advanced Features
export default function AdvancedApp() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
          }}>
            🚀 Smart Linkify Advanced Examples
          </h1>
          <p style={{ fontSize: '1.3em', color: '#666' }}>
            Complete showcase of all 40+ options and advanced features
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '30px',
            flexWrap: 'wrap',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>40+</div>
              <div style={{ color: '#999' }}>Options</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>14</div>
              <div style={{ color: '#999' }}>Presets</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>118</div>
              <div style={{ color: '#999' }}>Tests</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>0</div>
              <div style={{ color: '#999' }}>Dependencies</div>
            </div>
          </div>
        </header>

        <InteractiveEditor />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <CallbackExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <CustomTransformExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensiveEmailExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensivePhoneExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensiveSocialExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensiveSecurityExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensiveStylingExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensiveTruncationExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <ComprehensiveAccessibilityExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <AllPresetsExample />
        <hr style={{ margin: '60px 0', border: 'none', borderTop: '2px solid #e9ecef' }} />
        
        <RealWorldDashboard />

        <footer style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '2px solid #e9ecef',
          textAlign: 'center',
          color: '#666',
        }}>
          <p><strong>Smart Linkify</strong> - Transform text into intelligent, interactive links</p>
          <p style={{ marginTop: '15px' }}>
            <a href="https://github.com/avinashReddiDev/smart-linkify" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', marginRight: '15px' }}>GitHub</a>
            <a href="https://www.npmjs.com/package/@smart-linkify/core" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', marginRight: '15px' }}>npm</a>
            <a href="../README.md" style={{ color: '#667eea' }}>Documentation</a>
          </p>
          <p style={{ marginTop: '15px', fontSize: '0.9em', color: '#999' }}>© 2026 Smart Linkify. MIT License.</p>
        </footer>
      </div>
    </div>
  );
}
