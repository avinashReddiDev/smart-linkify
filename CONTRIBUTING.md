# Contributing to Smart Linkify

First off, thank you for considering contributing to Smart Linkify! It's people like you that make Smart Linkify such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to reddiavinash59@gmail.com.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples** to demonstrate the steps
* **Describe the behavior you observed** and what you expected to see
* **Include code samples** and test cases if possible
* **Specify your environment** (Node version, browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a detailed description** of the suggested enhancement
* **Provide specific examples** to demonstrate the enhancement
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/avinashReddiDev/smart-linkify.git
   cd smart-linkify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the packages**
   ```bash
   npm run build
   ```

4. **Make your changes**
   - Core library changes: `packages/core/src/`
   - React component changes: `packages/react/src/`

5. **Build and test**
   ```bash
   npm run build
   # Add tests when available
   # npm test
   ```

## Project Structure

```
smart-linkify/
├── packages/
│   ├── core/              # Core linkify library
│   │   ├── src/
│   │   │   ├── index.ts   # Main export
│   │   │   ├── linkify.ts # Core linkify function
│   │   │   ├── presets.ts # Preset configurations
│   │   │   └── types.ts   # TypeScript types
│   │   └── package.json
│   └── react/             # React wrapper
│       ├── src/
│       │   └── index.tsx  # React component
│       └── package.json
├── package.json           # Root package
└── tsconfig.json         # TypeScript config
```

## Styleguide

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

Example:
```
Add support for custom URL patterns

- Implement regex pattern customization
- Add tests for custom patterns
- Update documentation

Fixes #123
```

### TypeScript Styleguide

* Use TypeScript for all new code
* Follow the existing code style
* Use meaningful variable names
* Add JSDoc comments for public APIs
* Export types for public interfaces
* Use strict type checking

### Documentation Styleguide

* Use Markdown for documentation
* Reference functions and variables in backticks: \`linkify()\`
* Include code examples for new features
* Update the README.md if you change functionality

## Package Publishing

Only maintainers can publish packages. The process is:

1. Update version in package.json files
2. Update CHANGELOG.md
3. Build all packages: `npm run build`
4. Publish to npm:
   ```bash
   cd packages/core && npm publish
   cd ../react && npm publish
   ```

## Testing

We welcome test contributions! Currently, the project needs:

* Unit tests for core functions
* Integration tests for React components
* Edge case coverage
* Browser compatibility tests

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## Recognition

Contributors will be recognized in:
* The project README
* Release notes
* GitHub contributors page

Thank you for contributing! 🎉
