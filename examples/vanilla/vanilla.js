// Basic vanilla JavaScript example
import { linkify, presets } from '@smart-linkify/core';

// Example 1: Basic usage
const text1 = "Check out https://github.com and www.google.com!";
const result1 = linkify(text1);
console.log('Basic:', result1);

// Example 2: With custom options
const text2 = "Visit example.com for more information";
const result2 = linkify(text2, {
  color: '#0066cc',
  target: '_self',
  className: 'my-link',
  underline: false,
  maxLength: 20
});
console.log('Custom options:', result2);

// Example 3: Using presets
const text3 = "Follow us on twitter.com";
const result3 = linkify(text3, presets.social);
console.log('Social preset:', result3);

// Example 4: Professional preset
const text4 = "Read our documentation at docs.example.com";
const result4 = linkify(text4, presets.professional);
console.log('Professional preset:', result4);

// Example 5: Compact preset for long URLs
const text5 = "Download from https://example.com/downloads/very-long-path/to/file.zip";
const result5 = linkify(text5, presets.compact);
console.log('Compact preset:', result5);

// Example 6: Handling multiple URLs
const text6 = `
  Here are some useful links:
  - Main site: https://example.com
  - Documentation: docs.example.com
  - GitHub: github.com/username/repo
`;
const result6 = linkify(text6, presets.minimal);
console.log('Multiple URLs:', result6);

// Example 7: Using in DOM
if (typeof document !== 'undefined') {
  const container = document.getElementById('linkify-demo');
  if (container) {
    container.innerHTML = linkify(
      "Visit our website at example.com or email us!",
      { color: '#1da1f2', className: 'demo-link' }
    );
  }
}

// Example 8: Error handling
try {
  // This will throw a TypeError
  linkify(123);
} catch (error) {
  console.error('Error caught:', error.message);
}

// Example 9: Empty string handling
const emptyResult = linkify("");
console.log('Empty string:', emptyResult === "");

// Example 10: No URLs
const noUrlText = "This text has no URLs";
const noUrlResult = linkify(noUrlText);
console.log('No URLs:', noUrlResult === noUrlText);
