import React from 'react';
import { SmartLinkify } from '@smart-linkify/react';
import { presets } from '@smart-linkify/core';

/**
 * Complete React Examples showcasing all Smart Linkify features
 */

// Example 1: Basic URL Detection
export function BasicExample() {
  return (
    <div>
      <h2>Basic Example</h2>
      <SmartLinkify text="Visit https://github.com and www.google.com for more info" />
    </div>
  );
}

// Example 2: Custom Styling with Colors
export function CustomStyleExample() {
  return (
    <div>
      <h2>Custom Styling</h2>
      <SmartLinkify
        text="Check out www.github.com and www.npmjs.com"
        options={{
          color: '#ff6b6b',
          className: 'custom-link',
          underline: true,
        }}
      />
    </div>
  );
}

// Example 3: Email Detection
export function EmailExample() {
  return (
    <div>
      <h2>Email Detection</h2>
      <SmartLinkify
        text="Contact us at hello@example.com or support@company.org"
        options={{
          detectEmails: true,
          emailPrefix: 'mailto:',
        }}
      />
    </div>
  );
}

// Example 4: Phone Number Detection
export function PhoneExample() {
  return (
    <div>
      <h2>Phone Detection</h2>
      <SmartLinkify
        text="Call us at (555) 123-4567 or +1-555-987-6543"
        options={{
          detectPhones: true,
          phonePrefix: 'tel:',
        }}
      />
    </div>
  );
}

// Example 5: Combined Contact Info
export function ContactExample() {
  return (
    <div>
      <h2>Complete Contact Info</h2>
      <SmartLinkify
        text="Visit https://example.com, email hello@example.com, or call 555-123-4567 for support"
        options={{
          detectEmails: true,
          detectPhones: true,
          color: '#0066cc',
        }}
      />
    </div>
  );
}

// Example 6: Hashtag Detection (Social Media)
export function HashtagExample() {
  return (
    <div>
      <h2>Hashtag Detection</h2>
      <SmartLinkify
        text="Loving #javascript #typescript #react #webdev today!"
        options={{
          detectHashtags: true,
          hashtagUrl: (tag: string) => `https://twitter.com/hashtag/${tag}`,
          color: '#1da1f2',
        }}
      />
    </div>
  );
}

// Example 7: Mention Detection (Social Media)
export function MentionExample() {
  return (
    <div>
      <h2>Mention Detection</h2>
      <SmartLinkify
        text="Follow @github @npmjs and @nodejs on Twitter"
        options={{
          detectMentions: true,
          mentionUrl: (user: string) => `https://twitter.com/${user}`,
          color: '#1da1f2',
        }}
      />
    </div>
  );
}

// Example 8: Full Social Media Post
export function SocialPostExample() {
  return (
    <div>
      <h2>Complete Social Media Post</h2>
      <SmartLinkify
        text="Just released v2.0! 🚀 Check it out at github.com/user/repo #opensource #javascript Follow @developer for updates"
        options={{
          detectHashtags: true,
          detectMentions: true,
          hashtagUrl: (tag: string) => `https://twitter.com/hashtag/${tag}`,
          mentionUrl: (user: string) => `https://twitter.com/${user}`,
          color: '#1da1f2',
        }}
      />
    </div>
  );
}

// Example 9: URL Truncation
export function TruncationExample() {
  return (
    <div>
      <h2>URL Truncation</h2>
      <SmartLinkify
        text="Download from https://example.com/very/long/path/to/some/file.zip"
        options={{
          maxLength: 40,
          truncateStrategy: 'middle', // 'end', 'middle', or 'smart'
        }}
      />
    </div>
  );
}

// Example 10: Remove Tracking Parameters (Security)
export function SecurityExample() {
  return (
    <div>
      <h2>Remove Tracking Parameters</h2>
      <SmartLinkify
        text="Visit https://example.com?utm_source=twitter&utm_medium=social&fbclid=abc123"
        options={{
          removeTracking: true,
        }}
      />
      <p style={{ color: '#666', fontSize: '0.9em' }}>
        Removes: utm_*, fbclid, gclid, msclkid, and more
      </p>
    </div>
  );
}

// Example 11: Domain Blocklist/Allowlist
export function DomainFilterExample() {
  return (
    <div>
      <h2>Domain Filtering</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Blocklist</h3>
        <SmartLinkify
          text="Visit example.com and blocked-site.com"
          options={{
            blocklist: ['blocked-site.com', 'spam.com'],
          }}
        />
      </div>
      <div>
        <h3>Allowlist</h3>
        <SmartLinkify
          text="Check out github.com, google.com, and random-site.com"
          options={{
            allowlist: ['github.com', 'google.com'],
          }}
        />
      </div>
    </div>
  );
}

// Example 12: Domain-Specific Styling
export function DomainStyleExample() {
  return (
    <div>
      <h2>Domain-Specific Icons & Colors</h2>
      <SmartLinkify
        text="Visit github.com, npmjs.com, and stackoverflow.com"
        options={{
          domainStyles: {
            'github.com': {
              icon: '🐙 ',
              color: '#333',
            },
            'npmjs.com': {
              icon: '📦 ',
              color: '#cb3837',
            },
            'stackoverflow.com': {
              icon: '📚 ',
              color: '#f48024',
            },
          },
        }}
      />
    </div>
  );
}

// Example 13: Custom Icons
export function IconsExample() {
  return (
    <div>
      <h2>Custom Icons</h2>
      <SmartLinkify
        text="Visit https://example.com for more information"
        options={{
          iconBefore: '🔗 ',
          iconAfter: ' →',
        }}
      />
    </div>
  );
}

// Example 14: Accessibility Features
export function AccessibilityExample() {
  return (
    <div>
      <h2>Accessibility (ARIA Labels)</h2>
      <SmartLinkify
        text="Read documentation at https://docs.example.com"
        options={{
          ariaLabel: 'External link to documentation',
          screenReaderText: 'Opens in new window',
        }}
      />
    </div>
  );
}

// Example 15: Using Presets
export function PresetExample() {
  return (
    <div>
      <h2>Built-in Presets</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Minimal Preset</h3>
        <SmartLinkify
          text="Visit example.com"
          options={presets.minimal}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Social Preset</h3>
        <SmartLinkify
          text="Check out #javascript @github on twitter.com"
          options={presets.social}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Professional Preset</h3>
        <SmartLinkify
          text="Contact us at hello@example.com or visit docs.example.com"
          options={presets.professional}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Secure Preset</h3>
        <SmartLinkify
          text="Visit https://example.com?utm_source=test"
          options={presets.secure}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Compact Preset</h3>
        <SmartLinkify
          text="Download from https://example.com/very/long/path/to/file.zip"
          options={presets.compact}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Contact Preset</h3>
        <SmartLinkify
          text="Email hello@example.com or call 555-123-4567"
          options={presets.contact}
        />
      </div>
    </div>
  );
}

// Example 16: Chat Message Component
export function ChatMessage({ username, message }: { username: string; message: string }) {
  return (
    <div style={{ 
      padding: '15px', 
      margin: '10px 0', 
      background: '#f8f9fa',
      borderRadius: '12px',
      borderLeft: '4px solid #1da1f2'
    }}>
      <strong style={{ color: '#1da1f2' }}>{username}:</strong>{' '}
      <SmartLinkify 
        text={message}
        options={presets.social}
      />
    </div>
  );
}

// Example 17: Comment Component
export function Comment({ author, text, timestamp }: { author: string; text: string; timestamp: string }) {
  return (
    <div style={{ 
      background: 'white',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '10px',
        color: '#666'
      }}>
        <span style={{ fontWeight: 600, color: '#333' }}>{author}</span>
        <span style={{ fontSize: '0.9em' }}>{timestamp}</span>
      </div>
      <div>
        <SmartLinkify
          text={text}
          options={{
            color: '#0066cc',
            maxLength: 60,
            detectEmails: true,
            detectHashtags: true,
            detectMentions: true,
            hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
            mentionUrl: (user) => `https://twitter.com/${user}`,
          }}
        />
      </div>
    </div>
  );
}

// Example 18: User Bio Component
export function UserBio({ bio }: { bio: string }) {
  return (
    <div style={{ 
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '12px',
      fontStyle: 'italic'
    }}>
      <SmartLinkify
        text={bio}
        options={presets.inline}
      />
    </div>
  );
}

// Example 19: Blog Post Preview
export function BlogPostPreview({ title, excerpt, url }: { title: string; excerpt: string; url: string }) {
  return (
    <article style={{ 
      background: 'white',
      padding: '25px',
      margin: '20px 0',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0, color: '#1a1a1a' }}>{title}</h3>
      <SmartLinkify
        text={excerpt}
        options={{
          detectEmails: true,
          detectHashtags: true,
          hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
          color: '#1da1f2',
        }}
      />
      <div style={{ marginTop: '15px' }}>
        <SmartLinkify
          text={`Read more at ${url}`}
          options={{
            color: '#28a745',
            className: 'read-more-link',
          }}
        />
      </div>
    </article>
  );
}

// Example 20: Mobile-Friendly Link
export function MobileFriendlyLink({ text }: { text: string }) {
  return (
    <SmartLinkify
      text={text}
      options={presets.mobile}
    />
  );
}

// Example 21: Support Ticket Display
export function SupportTicket({ ticketId, description }: { ticketId: string; description: string }) {
  return (
    <div style={{ 
      background: '#fff3cd',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '12px',
      border: '2px solid #ffc107'
    }}>
      <div style={{ fontWeight: 600, marginBottom: '10px' }}>
        Ticket #{ticketId}
      </div>
      <SmartLinkify
        text={description}
        options={{
          detectEmails: true,
          detectPhones: true,
          color: '#856404',
        }}
      />
    </div>
  );
}

// Example 22: Newsletter Content
export function NewsletterContent({ content }: { content: string }) {
  return (
    <div style={{ 
      background: 'white',
      padding: '30px',
      margin: '20px 0',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
    }}>
      <SmartLinkify
        text={content}
        options={presets.email}
      />
    </div>
  );
}

// Example 23: Code Documentation Link
export function DocumentationLink({ text }: { text: string }) {
  return (
    <SmartLinkify
      text={text}
      options={presets.documentation}
    />
  );
}

// Example 24: Complete Application Example
export default function App() {
  const sampleMessages = [
    {
      id: 1,
      username: 'Alice',
      message: 'Check out this cool library: https://github.com/example/repo #opensource #javascript',
    },
    {
      id: 2,
      username: 'Bob',
      message: 'I found a great tutorial at www.example.com/tutorials @alice you should check it out!',
    },
    {
      id: 3,
      username: 'Charlie',
      message: 'Documentation is available at docs.example.com. Email me at charlie@example.com for questions.',
    },
  ];

  const comments = [
    {
      author: 'John Doe',
      text: 'Great article! I wrote something similar at myblog.com/post. Check out #webdev',
      timestamp: '2 hours ago',
    },
    {
      author: 'Jane Smith',
      text: 'Thanks for sharing! Contact me at jane@example.com or follow @janesmith for more updates.',
      timestamp: '5 hours ago',
    },
  ];

  return (
    <div style={{ 
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '3em',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          🔗 Smart Linkify React Demo
        </h1>
        <p style={{ fontSize: '1.2em', color: '#666' }}>
          Complete feature showcase with real-world examples
        </p>
      </header>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#333', 
          borderLeft: '5px solid #667eea', 
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          💬 Chat Messages
        </h2>
        <div>
          {sampleMessages.map((msg) => (
            <ChatMessage
              key={msg.id}
              username={msg.username}
              message={msg.message}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#333', 
          borderLeft: '5px solid #667eea', 
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          💭 Comment Section
        </h2>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            author={comment.author}
            text={comment.text}
            timestamp={comment.timestamp}
          />
        ))}
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#333', 
          borderLeft: '5px solid #667eea', 
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          👤 User Bio
        </h2>
        <UserBio bio="Software developer | Website: example.com | GitHub: github.com/johndoe | Email: john@example.com" />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#333', 
          borderLeft: '5px solid #667eea', 
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          📝 Blog Posts
        </h2>
        <BlogPostPreview
          title="Introduction to Smart Linkify"
          excerpt="Learn how to transform plain text into interactive links with Smart Linkify. Check out #javascript #webdev for more content."
          url="blog.example.com/smart-linkify-intro"
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#333', 
          borderLeft: '5px solid #667eea', 
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          🎫 Support Tickets
        </h2>
        <SupportTicket
          ticketId="12345"
          description="Having issues with API endpoint api.example.com/v1/users. Please email support@example.com or call (555) 123-4567 for urgent assistance."
        />
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ 
          color: '#333', 
          borderLeft: '5px solid #667eea', 
          paddingLeft: '15px',
          marginBottom: '30px'
        }}>
          📧 Newsletter
        </h2>
        <NewsletterContent
          content="New features released! Check them out at example.com/features. Questions? Email newsletter@example.com. Follow us @example for updates!"
        />
      </section>

      <footer style={{ 
        textAlign: 'center',
        marginTop: '80px',
        paddingTop: '40px',
        borderTop: '2px solid #e9ecef',
        color: '#666'
      }}>
        <p><strong>Smart Linkify</strong> - Transform text into intelligent, interactive links</p>
        <p>
          <a href="https://github.com/avinashReddiDev/smart-linkify" target="_blank" rel="noopener noreferrer">GitHub</a> •
          <a href="https://www.npmjs.com/package/@smart-linkify/core" target="_blank" rel="noopener noreferrer">npm</a> •
          <a href="../README.md">Documentation</a>
        </p>
        <p style={{ fontSize: '0.9em', color: '#999' }}>© 2026 Smart Linkify. MIT License.</p>
      </footer>
    </div>
  );
}
