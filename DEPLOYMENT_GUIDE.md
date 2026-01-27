# GitHub Pages Deployment Guide for geny.ai

This guide will help you deploy your Geny Systems website to GitHub Pages with your custom domain (geny.ai).

## Prerequisites

- Git repository already set up at: https://github.com/aemurd-n/genyweb1
- Access to 101domain DNS management panel for geny.ai
- Node.js and npm installed

## Step 1: Verify Configuration (Already Done!)

Your package.json has been configured with:
- `homepage`: "https://geny.ai"
- `predeploy` and `deploy` scripts
- `gh-pages` package installed
- Repository URL: https://github.com/aemurd-n/genyweb1.git

Your public/CNAME file contains: `geny.ai`

## Step 2: Commit and Push Changes

First, commit all your recent changes:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment with custom domain"
git push origin main
```

## Step 3: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Create/update the `gh-pages` branch
3. Push the build folder to GitHub Pages

The site will be available at: https://aemurd-n.github.io/genyweb1 (temporarily)

## Step 4: Configure Custom Domain in GitHub

1. Go to your repository: https://github.com/aemurd-n/genyweb1
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under "Custom domain", enter: `geny.ai`
4. Click **Save**
5. Check "Enforce HTTPS" (recommended)

## Step 5: Configure DNS at 101domain

Log in to your 101domain account and go to DNS management for geny.ai:

### For Root Domain (geny.ai)

Add these **A records**:

| Type | Host | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 3600 |
| A    | @    | 185.199.109.153 | 3600 |
| A    | @    | 185.199.110.153 | 3600 |
| A    | @    | 185.199.111.153 | 3600 |

### For WWW Subdomain

Add this **CNAME record**:

| Type  | Host | Value                      | TTL  |
|-------|------|----------------------------|------|
| CNAME | www  | aemurd-n.github.io         | 3600 |

**Note**: If 101domain supports ALIAS or ANAME records for the root domain, you can use:
- Type: ALIAS/ANAME
- Host: @
- Value: aemurd-n.github.io

This is cleaner than multiple A records but both methods work.

## Step 6: Wait for DNS Propagation

DNS changes typically take:
- **5-30 minutes** for most changes
- **Up to 48 hours** in rare cases

You can check DNS propagation status at:
- https://www.whatsmydns.net/#A/geny.ai
- https://www.whatsmydns.net/#CNAME/www.geny.ai

## Step 7: Verify Deployment

Once DNS has propagated, visit:
- https://geny.ai
- https://www.geny.ai

Both should show your website with HTTPS enabled.

## Future Updates

To update your live website:

1. Make changes to your code
2. Commit changes: `git add . && git commit -m "Your message"`
3. Push to GitHub: `git push origin main`
4. Deploy: `npm run deploy`

The deployment process typically takes 1-2 minutes.

## Troubleshooting

### Site not loading after deployment
- Check GitHub Pages is enabled in Settings > Pages
- Verify the gh-pages branch exists
- Check browser console for errors

### Custom domain not working
- Verify DNS records are correct at 101domain
- Check DNS propagation status
- Ensure CNAME file exists in public/ folder
- Try clearing your browser cache

### HTTPS certificate issues
- Wait 24 hours after DNS configuration
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- Try disabling and re-enabling the custom domain

### 404 errors on routes
- This is normal for React Router with GitHub Pages
- The HashRouter (#/) in your app handles this
- Routes like https://geny.ai/#/services work correctly

## Support

If you encounter issues:
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Review GitHub Pages documentation: https://docs.github.com/en/pages
3. Check 101domain support for DNS questions

---

**Last Updated**: January 27, 2026
**Repository**: https://github.com/aemurd-n/genyweb1
**Live Site**: https://geny.ai
