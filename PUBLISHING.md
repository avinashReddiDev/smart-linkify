# Publishing Guide

This guide explains how to publish Smart Linkify packages to npm.

## Prerequisites

1. **npm account**: Create one at [npmjs.com](https://www.npmjs.com/)
2. **npm login**: Run `npm login` and enter your credentials
3. **2FA enabled**: Recommended for security
4. **Repository access**: Maintainer access to this repository

## Pre-Publishing Checklist

- [ ] All tests pass (when available)
- [ ] Version numbers updated in all `package.json` files
- [ ] `CHANGELOG.md` updated with new version
- [ ] All packages build successfully
- [ ] Documentation is up-to-date
- [ ] Git working directory is clean
- [ ] On the `main` branch

## Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes, backward compatible

## Publishing Steps

### 1. Update Version Numbers

Update version in all package.json files:
```bash
# For a patch release
npm version patch

# For a minor release
npm version minor

# For a major release
npm version major
```

Or manually update:
- `/package.json`
- `/packages/core/package.json`
- `/packages/react/package.json`

### 2. Update CHANGELOG.md

Add a new section for the release:
```markdown
## [1.0.1] - 2026-01-XX

### Added
- New feature descriptions

### Fixed
- Bug fix descriptions

### Changed
- Change descriptions
```

### 3. Commit Changes

```bash
git add .
git commit -m "chore: bump version to 1.0.1"
git push origin main
```

### 4. Create Git Tag

```bash
git tag v1.0.1
git push origin v1.0.1
```

### 5. Build All Packages

```bash
npm run clean
npm run build
```

Verify the build output:
```bash
ls -la packages/core/dist/
ls -la packages/react/dist/
```

### 6. Publish to npm

#### Option A: Publish Each Package Manually

```bash
# Publish core package
cd packages/core
npm publish --access public

# Publish react package
cd ../react
npm publish --access public
```

#### Option B: Use Workspaces

```bash
# From root directory
npm publish --workspaces --access public
```

### 7. Verify Publication

Check that packages are available:
```bash
npm view @smart-linkify/core
npm view @smart-linkify/react
```

Visit package pages:
- https://www.npmjs.com/package/@smart-linkify/core
- https://www.npmjs.com/package/@smart-linkify/react

### 8. Create GitHub Release

1. Go to GitHub repository
2. Click "Releases" → "Draft a new release"
3. Choose the tag you created
4. Title: `v1.0.1`
5. Description: Copy from CHANGELOG.md
6. Click "Publish release"

## Troubleshooting

### Error: Package already published

- You cannot republish the same version
- Increment the version number and try again

### Error: 403 Forbidden

- Check you're logged in: `npm whoami`
- Verify you have publish rights
- Ensure 2FA code is correct

### Error: Package name already exists

- The `@smart-linkify` scope must be available
- Or change the scope in package.json files

### Build Errors

- Run `npm run clean` first
- Check TypeScript errors: `npm run typecheck`
- Ensure dependencies are installed: `npm install`

## Testing Before Publishing

### Test Local Installation

```bash
# Pack packages without publishing
cd packages/core
npm pack

cd ../react
npm pack
```

### Test in Another Project

```bash
# In another directory
npm install /path/to/smart-linkify/packages/core/smart-linkify-core-1.0.0.tgz
npm install /path/to/smart-linkify/packages/react/smart-linkify-react-1.0.0.tgz
```

## Automated Publishing (Future)

Consider setting up GitHub Actions for automated publishing:

1. Create `.github/workflows/publish.yml`
2. Configure npm token as GitHub secret
3. Trigger on version tags
4. Run tests → Build → Publish

## Unpublishing

⚠️ **Warning**: Unpublishing is discouraged by npm.

If you must unpublish within 72 hours:
```bash
npm unpublish @smart-linkify/core@1.0.0
```

For older versions, deprecate instead:
```bash
npm deprecate @smart-linkify/core@1.0.0 "Use version 1.0.1 instead"
```

## Post-Publishing

1. Announce on social media (optional)
2. Update documentation site (if available)
3. Notify users of breaking changes (for major versions)
4. Monitor for issues and bug reports

## Security Publishing

For security releases:
1. Fix the vulnerability privately
2. Prepare the patch
3. Publish quickly
4. Announce the security fix
5. Update SECURITY.md if needed

## Need Help?

- npm documentation: https://docs.npmjs.com/
- Contact maintainers: [reddiavinash59@gmail.com]
