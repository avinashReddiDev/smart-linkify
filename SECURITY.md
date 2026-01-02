# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Smart Linkify seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please do NOT:

- Open a public GitHub issue
- Post about it on social media or public forums

### Please DO:

1. **Email us** at [reddiavinash59@gmail.com] with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

2. **Allow us time** to respond and fix the issue before public disclosure

3. **Expect a response** within 48 hours acknowledging your report

## What to Report

Please report any security issues including but not limited to:

- XSS (Cross-Site Scripting) vulnerabilities
- Injection attacks
- Unauthorized access
- Information disclosure
- Denial of Service (DoS)
- Any other security concerns

## Security Measures

Smart Linkify implements several security measures:

- **HTML Escaping**: All user input is properly escaped to prevent XSS attacks
- **Safe Link Attributes**: Links opened in new tabs include `rel="noopener noreferrer"`
- **Input Validation**: Type checking and validation of all inputs
- **No Dependencies**: Core package has zero dependencies to minimize supply chain risks
- **TypeScript**: Strong typing helps prevent common errors

## Security Updates

Security updates will be released as patch versions and documented in the CHANGELOG.md file with a `[SECURITY]` tag.

## Best Practices for Users

When using Smart Linkify:

1. Always sanitize user input before passing to linkify
2. Use Content Security Policy (CSP) headers in your application
3. Keep the package updated to the latest version
4. Review the security implications of your options (e.g., `target="_blank"`)

## Acknowledgments

We appreciate the security research community and will acknowledge security researchers who report valid vulnerabilities (with their permission).

## Questions?

If you have questions about this security policy, please contact us at [your.email@example.com].
