# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Add support for custom URL patterns
- Add email address detection and linkification
- Add internationalization support
- Add custom click handlers
- Add tests and CI/CD pipeline

## [1.0.0] - 2026-01-02

### Added
- Initial release of @smart-linkify/core
- Initial release of @smart-linkify/react
- Core `linkify()` function for URL detection and conversion
- React `<SmartLinkify />` component
- Comprehensive options for link customization:
  - Custom colors
  - Target attributes (_blank, _self)
  - CSS class names
  - Underline toggle
  - Maximum display length with truncation
- Built-in presets:
  - minimal - Clean look without underlines
  - secure - Opens in new tab with security
  - social - Social media styling
  - professional - Business-appropriate styling
  - compact - Truncated URLs for cleaner display
  - inline - Subtle styling that blends with text
- TypeScript support with full type definitions
- ESM and CJS module formats
- XSS protection with HTML escaping
- Security features (noopener, noreferrer)
- Comprehensive documentation

### Features
- Detects URLs with and without protocols
- Automatically adds https:// to URLs without protocol
- Handles various TLDs and subdomains
- Supports URLs with paths, query strings, and fragments
- Input validation and error handling
- Zero dependencies for core package

### Security
- HTML escaping to prevent XSS attacks
- Automatic `rel="noopener noreferrer"` for external links
- Safe handling of user-generated content

[Unreleased]: https://github.com/avinashReddiDev/smart-linkify/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/avinashReddiDev/smart-linkify/releases/tag/v1.0.0
