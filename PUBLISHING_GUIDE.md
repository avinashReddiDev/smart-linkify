# Publishing Guide

This guide will walk you through publishing the `@smart-linkify/core` and `@smart-linkify/react` packages to npm.

## Prerequisites

Before publishing, ensure you have:

1. **npm account**: Create one at [npmjs.com](https://www.npmjs.com/signup)
2. **npm CLI installed**: Comes with Node.js
3. **npm login**: Run `npm login` and enter your credentials
4. **Repository access**: You must be a maintainer of this repository
5. **Two-factor authentication**: Highly recommended for security

## Pre-Publishing Checklist

Before publishing a new version, verify:

- ✅ All tests pass: `npm test`
- ✅ TypeScript compiles: `npm run typecheck`
- ✅ Build succeeds: `npm run build`
- ✅ CHANGELOG.md updated with new version notes
- ✅ README.md has accurate documentation
- ✅ No security vulnerabilities: `npm audit`

## Publishing Steps

### 1. Authenticate with npm

```bash
# Login to npm (first time only)
npm login

# Verify your login
npm whoami
```

### 2. Update Version Numbers

Update the version in both package.json files. We use [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backwards compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backwards compatible

```bash
# Option 1: Manually edit package.json files
# packages/core/package.json
# packages/react/package.json

# Option 2: Use npm version command (recommended)
cd packages/core
npm version patch  # or minor, or major
cd ../react
npm version patch  # or minor, or major
cd ../..
```

### 3. Update CHANGELOG.md

Add release notes to `CHANGELOG.md`:

```markdown
## [1.0.1] - 2026-01-02

### Added
- New feature description

### Fixed
- Bug fix description

### Changed
- Changed feature description

### Security
- Security improvement description
```

### 4. Build the Packages

```bash
# Clean install dependencies
npm ci

# Build both packages
npm run build

# Verify build output
ls -lah packages/core/dist
ls -lah packages/react/dist
```

### 5. Test the Build

```bash
# Run all tests
npm test

# Run type checking
npm run typecheck

# Check for vulnerabilities
npm audit
```

### 6. Publish to npm

```bash
# Publish core package
cd packages/core
npm publish --access public

# Publish react package
cd ../react
npm publish --access public

cd ../..
```

**Note**: The `--access public` flag is required for scoped packages (@smart-linkify/*) to make them publicly accessible.

### 7. Create Git Tag and Push

```bash
# Commit version changes
git add .
git commit -m "chore: release v1.0.1"

# Create git tag
git tag -a v1.0.1 -m "Release version 1.0.1"

# Push changes and tags
git push origin main
git push origin v1.0.1
```

### 8. Create GitHub Release

1. Go to your repository on GitHub
2. Click "Releases" → "Draft a new release"
3. Choose the tag you just created (v1.0.1)
4. Fill in release title and description
5. Copy release notes from CHANGELOG.md
6. Click "Publish release"

## Publishing from CI/CD (GitHub Actions)

For automated publishing, you can use GitHub Actions. Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      
      - run: npm ci
      
      - run: npm run build
      
      - run: npm test
      
      - name: Publish @smart-linkify/core
        run: |
          cd packages/core
          npm publish --provenance --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Publish @smart-linkify/react
        run: |
          cd packages/react
          npm publish --provenance --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

**Setup NPM_TOKEN secret**:
1. Go to npmjs.com → Account → Access Tokens
2. Generate new token with "Automation" type
3. Go to GitHub repository → Settings → Secrets → New repository secret
4. Name: `NPM_TOKEN`, Value: your token

## Unpublishing (Emergency Only)

If you need to unpublish a version within 72 hours:

```bash
# Unpublish specific version
npm unpublish @smart-linkify/core@1.0.1
npm unpublish @smart-linkify/react@1.0.1

# Deprecate a version (preferred over unpublish)
npm deprecate @smart-linkify/core@1.0.1 "Please upgrade to v1.0.2"
npm deprecate @smart-linkify/react@1.0.1 "Please upgrade to v1.0.2"
```

**⚠️ Warning**: Unpublishing is permanent and can break dependent projects. Use deprecation instead whenever possible.

## Publishing Beta/Alpha Versions

For pre-release versions:

```bash
# Update version to beta
npm version 1.1.0-beta.0

# Publish with beta tag
npm publish --access public --tag beta

# Users install with: npm install @smart-linkify/core@beta
```

## Verifying Publication

After publishing:

```bash
# Check package info
npm info @smart-linkify/core
npm info @smart-linkify/react

# Check specific version
npm info @smart-linkify/core@1.0.1

# View on npm website
# https://www.npmjs.com/package/@smart-linkify/core
# https://www.npmjs.com/package/@smart-linkify/react
```

## Troubleshooting

### "You must verify your email"
- Go to npmjs.com → Account Settings → Email
- Click "Resend verification email"

### "402 Payment Required"
- Scoped packages require `--access public` flag
- Solution: `npm publish --access public`

### "403 Forbidden"
- Not logged in: `npm login`
- Not authorized: Contact package maintainer
- Check organization membership on npmjs.com

### "Version already exists"
- Increment version number: `npm version patch`
- Cannot republish same version number

### "ENEEDAUTH"
- Token expired or invalid
- Re-authenticate: `npm login`

### Build fails
```bash
# Clean and rebuild
rm -rf node_modules package-lock.json
rm -rf packages/*/node_modules packages/*/dist
npm install
npm run build
```

## Post-Publishing Tasks

1. ✅ Announce release on social media/Discord/Slack
2. ✅ Update documentation website (if applicable)
3. ✅ Monitor npm downloads: `npm info @smart-linkify/core`
4. ✅ Watch for issues/bugs reported by users
5. ✅ Update project roadmap for next version

## Best Practices

1. **Never publish from feature branches** - Only publish from `main` or `release` branches
2. **Test thoroughly before publishing** - Run full test suite
3. **Use semantic versioning** - Follow semver.org guidelines
4. **Keep CHANGELOG updated** - Document all changes
5. **Tag releases in git** - Makes it easy to track versions
6. **Use provenance** - Adds supply chain security (`--provenance` flag)
7. **Enable 2FA** - Protect your npm account
8. **Review package contents** - Check what files will be published

## Checking Package Contents Before Publishing

```bash
# See what will be included in the package
cd packages/core
npm pack --dry-run

# Actually create tarball for inspection
npm pack
tar -xzf smart-linkify-core-1.0.1.tgz
ls -la package/
rm -rf package/ smart-linkify-core-1.0.1.tgz
```

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01-02 | Initial release |

## Support

For questions about publishing:
- Open an issue on GitHub
- Contact maintainers
- See npm documentation: https://docs.npmjs.com/

---

**Happy Publishing! 🚀**
