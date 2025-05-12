# Deploying VitalityCare as a Static Site

This guide explains how to deploy VitalityCare as a completely static site with Formspree for handling form submissions.

## What Changed

The application has been simplified to a static site:
- Removed backend API dependencies
- Contact forms now use Formspree to send emails directly
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

### Formspree Configuration

The contact form is configured to send emails to contact@vitalitycommunityvare.com.au using Formspree.

You need to:
1. Register at [Formspree](https://formspree.io/)
2. Create a form with your email address
3. Replace the URL in `ContactForm.tsx` with your Formspree form ID:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
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