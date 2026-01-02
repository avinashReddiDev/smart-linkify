# Git Setup Guide

Your GitHub repository is configured: **avinashReddiDev/smart-linkify**

## Quick Setup

### 1. Initialize Git Repository

```bash
cd /Users/avinash.reddi/Documents/playground/smart-linkify
git init
```

### 2. Create Initial Commit

```bash
git add .
git commit -m "feat: initial commit - smart linkify npm package

- Core linkify library with 6 presets
- React component wrapper
- Comprehensive documentation
- TypeScript support with strict mode
- ESM and CJS builds
- Examples and demos included"
```

### 3. Connect to GitHub

First, create the repository on GitHub (if not already created):
- Go to https://github.com/new
- Repository name: `smart-linkify`
- Description: "A modern TypeScript library for automatically converting URLs in text to clickable links"
- Public or Private: Choose your preference
- **Don't** initialize with README (we already have one)
- Click "Create repository"

Then connect your local repository:

```bash
git branch -M main
git remote add origin https://github.com/avinashReddiDev/smart-linkify.git
git push -u origin main
```

### 4. Verify Connection

```bash
git remote -v
# Should show:
# origin  https://github.com/avinashReddiDev/smart-linkify.git (fetch)
# origin  https://github.com/avinashReddiDev/smart-linkify.git (push)
```

## Alternative: If Repository Already Exists on GitHub

If you've already created the repository with files:

```bash
# Clone the existing repository
git clone https://github.com/avinashReddiDev/smart-linkify.git temp-repo
cd temp-repo

# Copy your local files
cp -r /Users/avinash.reddi/Documents/playground/smart-linkify/* .
cp -r /Users/avinash.reddi/Documents/playground/smart-linkify/.gitignore .

# Commit and push
git add .
git commit -m "feat: add complete smart-linkify package"
git push origin main
```

## Recommended: Add Branch Protection

After pushing to GitHub:

1. Go to repository Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews before merging
   - Require status checks to pass (when CI is set up)

## Optional: Add GitHub Actions

Create `.github/workflows/publish.yml` for automated publishing:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --workspaces --access public
        env:
          NODE_AUTH_TOKEN: \${{secrets.NPM_TOKEN}}
```

## Git Best Practices

### Commit Message Format

Use conventional commits:
```
type(scope): subject

body

footer
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks
- `refactor`: Code refactoring
- `test`: Adding tests
- `perf`: Performance improvements

Examples:
```bash
git commit -m "feat(core): add email linkification support"
git commit -m "fix(react): resolve props type mismatch"
git commit -m "docs: update installation instructions"
```

### Branching Strategy

```bash
# Create feature branch
git checkout -b feat/add-email-support

# Make changes, commit
git add .
git commit -m "feat: add email linkification"

# Push to GitHub
git push origin feat/add-email-support

# Create Pull Request on GitHub
```

## Tags and Releases

When ready to release a new version:

```bash
# Update version in package.json files
npm version patch  # or minor, or major

# Create and push tag
git tag -a v1.0.1 -m "Release v1.0.1"
git push origin v1.0.1

# Create release on GitHub
# Go to: https://github.com/avinashReddiDev/smart-linkify/releases/new
```

## Troubleshooting

### Authentication Issues

If you have 2FA enabled (recommended):

1. Use Personal Access Token instead of password
2. Create token at: https://github.com/settings/tokens
3. Select scopes: `repo`, `workflow`
4. Use token as password when pushing

Or set up SSH:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "reddiavinash59@gmail.com"

# Add to GitHub: https://github.com/settings/keys

# Change remote to SSH
git remote set-url origin git@github.com:avinashReddiDev/smart-linkify.git
```

### Already Initialized in Parent Directory

If you get "already a git repository" error:

```bash
# Check for parent .git
find /Users/avinash.reddi/Documents/playground -name ".git" -type d

# Remove if in wrong location
# Or move your project outside the git repo
```

## Next Steps After Git Setup

1. ✅ Push code to GitHub
2. Add repository description and topics on GitHub
3. Enable GitHub Pages for demo (optional)
4. Add GitHub Actions for CI/CD (optional)
5. Set up branch protection rules
6. Create initial GitHub release
7. Publish packages to npm (see PUBLISHING.md)

## Quick Commands Reference

```bash
# Check status
git status

# View changes
git diff

# Commit all changes
git add . && git commit -m "message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b branch-name

# Switch branches
git checkout main
```

---

**Ready to push your code to GitHub!** 🚀

All URLs in your package are already configured for `avinashReddiDev/smart-linkify`.
