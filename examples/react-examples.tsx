import React from 'react';
import { SmartLinkify } from '@smart-linkify/react';
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

// Example 3: Using presets
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
    </div>
  );
}

// Example 4: Chat-like interface
export function ChatMessage({ username, message }: { username: string; message: string }) {
  return (
    <div className="chat-message">
      <strong>{username}:</strong>
      <SmartLinkify 
        text={message}
        options={presets.social}
      />
    </div>
  );
}

// Example 5: Comment section
export function Comment({ author, text, timestamp }: { author: string; text: string; timestamp: string }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="author">{author}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
      <div className="comment-body">
        <SmartLinkify
          text={text}
          options={{
            color: '#1da1f2',
            maxLength: 50,
          }}
        />
      </div>
    </div>
  );
}

// Example 6: User bio with links
export function UserBio({ bio }: { bio: string }) {
  return (
    <div className="user-bio">
      <SmartLinkify
        text={bio}
        options={presets.inline}
      />
    </div>
  );
}

// Example 7: Truncated URLs for mobile
export function MobileFriendlyLink({ text }: { text: string }) {
  return (
    <SmartLinkify
      text={text}
      options={{
        maxLength: 30,
        underline: false,
        className: 'mobile-link',
      }}
    />
  );
}

// Example 8: Full app example
export default function App() {
  const sampleMessages = [
    {
      id: 1,
      username: 'Alice',
      message: 'Check out this cool library: https://github.com/example/repo',
    },
    {
      id: 2,
      username: 'Bob',
      message: 'I found a great tutorial at www.example.com/tutorials',
    },
    {
      id: 3,
      username: 'Charlie',
      message: 'Documentation is available at docs.example.com',
    },
  ];

  return (
    <div className="app">
      <h1>Smart Linkify Demo</h1>
      
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
        <UserBio bio="Software developer | Website: example.com | GitHub: github.com/johndoe" />
      </section>
    </div>
  );
}
