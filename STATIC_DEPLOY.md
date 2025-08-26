# Deploying VitalityCare as a Static Site

This guide explains how to deploy VitalityCare as a completely static site with web3forms for handling form submissions.

## What Changed

The application has been simplified to a static site:
- Removed backend API dependencies
- Contact forms now use web3forms to send emails directly
- Configuration optimized for Vercel static site hosting

## Deployment Steps

### On Vercel

1. **Connect Your Repository**
   - Connect your GitHub/GitLab/Bitbucket repository to Vercel

2. **Configure the Project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/public`

3. **Deploy**
   - Click "Deploy" and Vercel will handle the rest

### web3forms Configuration

The contact form is configured to send emails to contact@vitalitycommunityvare.com.au using web3forms.

You need to:
1. Register at [web3forms](https://web3forms.com/)
2. Create a form and get your access key
3. Replace the access_key in `ContactForm.tsx` with your web3forms access key:
   ```typescript
   access_key: "YOUR_ACCESS_KEY",
   ```

## Benefits of Static Deployment

- **Faster loading times**: Static files are served directly from CDN
- **Better reliability**: No server-side code to fail
- **Lower cost**: Static hosting is typically free or very low cost
- **Simplified maintenance**: No need to manage server infrastructure
- **Automatic scaling**: Handled by Vercel's global CDN

## Alternative Hosting Options

You can also deploy this static site on:
- GitHub Pages
- Netlify
- Cloudflare Pages
- Any static hosting service 