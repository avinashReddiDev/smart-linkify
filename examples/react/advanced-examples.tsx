import React from 'react';
import { SmartLinkify, useLinkify } from '@smart-linkify/react';
import { presets } from '@smart-linkify/core';

// Example 1: Basic usage
export function BasicExample() {
  return (
    <div>
      <h2>Basic Example</h2>
      <SmartLinkify text="Visit https://example.com for more info" />
    </div>
  );
}

// Example 2: Custom styling
export function CustomStyleExample() {
  return (
    <div>
      <h2>Custom Styling</h2>
      <SmartLinkify
        text="Check out www.github.com and www.npmjs.com"
        options={{
          color: '#0066cc',
          className: 'custom-link',
          underline: false,
        }}
      />
    </div>
  );
}

// Example 3: Email and Phone Detection
export function ContactExample() {
  return (
    <div>
      <h2>Contact Information</h2>
      <SmartLinkify
        text="Email us at hello@example.com or call (555) 123-4567"
        options={presets.contact}
      />
    </div>
  );
}

// Example 4: Social Media with Hashtags and Mentions
export function SocialExample() {
  return (
    <div>
      <h2>Social Media</h2>
      <SmartLinkify
        text="Follow @github and check out #javascript #typescript"
        options={presets.social}
      />
    </div>
  );
}

// Example 5: Using presets
export function PresetExample() {
  return (
    <div>
      <h2>Social Media Preset</h2>
      <SmartLinkify
        text="Follow us on twitter.com"
        options={presets.social}
      />
      
      <h2>Professional Preset</h2>
      <SmartLinkify
        text="Read our docs at docs.example.com"
        options={presets.professional}
      />
      
      <h2>GitHub Preset</h2>
      <SmartLinkify
        text="Star us on https://github.com/example/repo"
        options={presets.github}
      />
    </div>
  );
}

// Example 6: Security Features
export function SecurityExample() {
  return (
    <div>
      <h2>Remove Tracking Parameters</h2>
      <SmartLinkify
        text="Visit https://example.com?utm_source=newsletter&foo=bar"
        options={{
          removeTracking: true,
          showTooltip: true
        }}
      />
      
      <h2>Blocklist Example</h2>
      <SmartLinkify
        text="Good site: https://example.com, Bad site: https://spam.com"
        options={{
          blocklist: ['spam.com']
        }}
      />
    </div>
  );
}

// Example 7: Domain-Specific Styling
export function DomainStyleExample() {
  return (
    <div>
      <h2>Domain-Specific Icons and Colors</h2>
      <SmartLinkify
        text="Visit https://github.com, https://twitter.com, and https://npmjs.com"
        options={{
          domainStyles: {
            'github.com': { icon: '🐙 ', color: '#24292f' },
            'twitter.com': { icon: '🐦 ', color: '#1da1f2' },
            'npmjs.com': { icon: '📦 ', color: '#CB3837' }
          }
        }}
      />
    </div>
  );
}

// Example 8: Truncation Strategies
export function TruncationExample() {
  const longUrl = 'https://example.com/very/long/path/that/needs/truncation/for/better/display';
  
  return (
    <div>
      <h2>End Truncation</h2>
      <SmartLinkify
        text={longUrl}
        options={{
          maxLength: 40,
          truncateStrategy: 'end',
          showTooltip: true
        }}
      />
      
      <h2>Middle Truncation</h2>
      <SmartLinkify
        text={longUrl}
        options={{
          maxLength: 40,
          truncateStrategy: 'middle',
          showTooltip: true
        }}
      />
      
      <h2>Smart Truncation</h2>
      <SmartLinkify
        text={longUrl}
        options={{
          maxLength: 40,
          truncateStrategy: 'smart',
          showTooltip: true
        }}
      />
    </div>
  );
}

// Example 9: Accessibility Features
export function AccessibleExample() {
  return (
    <div>
      <h2>Accessible Links</h2>
      <SmartLinkify
        text="Visit https://example.com for documentation"
        options={presets.accessible}
      />
    </div>
  );
}

// Example 10: Click tracking
export function AnalyticsExample() {
  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    console.log('Link clicked:', url);
    // Send to analytics service
    event.preventDefault(); // Prevent default navigation for demo
  };

  return (
    <div>
      <h2>Click Tracking</h2>
      <SmartLinkify
        text="Visit https://example.com and https://google.com"
        options={presets.analytics}
        onLinkClick={handleLinkClick}
      />
    </div>
  );
}

// Example 11: Documentation preset
export function DocumentationExample() {
  return (
    <div>
      <h2>Technical Documentation</h2>
      <SmartLinkify
        text="See the API reference at https://api.example.com/docs"
        options={presets.documentation}
      />
    </div>
  );
}

// Example 12: Chat message component
export function ChatMessage({ username, message }: { username: string; message: string }) {
  return (
    <div className="chat-message">
      <strong>{username}:</strong> <SmartLinkify text={message} options={presets.social} />
    </div>
  );
}

// Example 13: Comment component
export function Comment({ author, text, timestamp }: { author: string; text: string; timestamp: string }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="author">{author}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
      <div className="comment-body">
        <SmartLinkify text={text} options={{ color: '#1da1f2', maxLength: 50 }} />
      </div>
    </div>
  );
}

// Example 14: User bio
export function UserBio({ bio }: { bio: string }) {
  return (
    <div className="user-bio">
      <SmartLinkify text={bio} options={presets.inline} />
    </div>
  );
}

// Example 15: Mobile-friendly
export function MobileFriendlyExample() {
  return (
    <div>
      <h2>Mobile Optimized</h2>
      <SmartLinkify
        text="Call us at +1-555-123-4567 or visit https://example.com/very/long/url/path"
        options={presets.mobile}
      />
    </div>
  );
}

// Example 16: Using the hook
export function HookExample() {
  const html = useLinkify('Visit https://example.com', { color: 'blue' });
  
  return (
    <div>
      <h2>Using useLinkify Hook</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

// Example 17: Mixed content
export function MixedContentExample() {
  return (
    <div>
      <h2>All-in-One Example</h2>
      <SmartLinkify
        text="Visit https://example.com, email hello@example.com, call 555-123-4567, follow @user and check #trending"
        options={{
          detectEmails: true,
          detectPhones: true,
          detectHashtags: true,
          detectMentions: true,
          hashtagUrl: (tag) => `https://twitter.com/hashtag/${tag}`,
          mentionUrl: (user) => `https://twitter.com/${user}`,
          color: '#0066cc',
          showTooltip: true
        }}
      />
    </div>
  );
}

// Full app demo
export default function App() {
  const sampleMessages = [
    {
      id: 1,
      username: 'Alice',
      message: 'Check out this cool library: https://github.com/example/repo #opensource',
    },
    {
      id: 2,
      username: 'Bob',
      message: 'I found a great tutorial at www.example.com/tutorials @alice',
    },
    {
      id: 3,
      username: 'Charlie',
      message: 'Contact me at charlie@example.com or call (555) 123-4567',
    },
  ];

  return (
    <div className="app">
      <h1>🔗 Smart Linkify Demo</h1>
      
      <section>
        <BasicExample />
        <CustomStyleExample />
        <ContactExample />
        <SocialExample />
        <SecurityExample />
        <DomainStyleExample />
        <TruncationExample />
        <AccessibleExample />
        <DocumentationExample />
        <MobileFriendlyExample />
        <MixedContentExample />
      </section>

      <section>
        <h2>Chat Messages</h2>
        <div className="chat">
          {sampleMessages.map((msg) => (
            <ChatMessage
              key={msg.id}
              username={msg.username}
              message={msg.message}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Comment Section</h2>
        <Comment
          author="John Doe"
          text="Great article! More info at example.com/article"
          timestamp="2 hours ago"
        />
      </section>

      <section>
        <h2>User Bio</h2>
        <UserBio bio="Software developer | Website: example.com | Email: john@example.com | GitHub: @johndoe" />
      </section>
      
      <section>
        <AnalyticsExample />
        <HookExample />
      </section>
    </div>
  );
}
