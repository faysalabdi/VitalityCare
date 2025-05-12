# Deploying VitalityCare to Vercel

This guide will help you deploy the VitalityCare application to Vercel.

## Prerequisites

1. A Vercel account
2. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Environment Variables

Make sure to set the following environment variables in your Vercel project settings:

- `DATABASE_URL`: Your PostgreSQL connection string (from NeonDB or other provider)
- `SESSION_SECRET`: A secure random string for session management
- `NODE_ENV`: Set to "production"

## Deployment Steps

1. **Log into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in or sign up

2. **Import Your Repository**:
   - Click "Add New" → "Project"
   - Connect your Git provider and select your repository

3. **Configure Project**:
   - Select "Other" as the framework preset (we've customized the configuration)
   - In the "Build and Output Settings" section:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add your environment variables
   - Click "Deploy"

## Troubleshooting

### 404 - NOT_FOUND Error

If you see a 404 error after deployment:

1. Check your Vercel deployment logs for any build errors
2. Ensure your `vercel.json` file is properly configured for routing
3. Verify that the `api/index.ts` file is correctly set up

### Other Common Issues

- **Database Connection Issues**: Ensure your database is accessible from Vercel's servers (check IP restrictions)
- **Build Failures**: Check the Vercel build logs for any TypeScript errors
- **Missing Environment Variables**: Double check that all required environment variables are set

## Project Structure

The project is set up with:

- Frontend: React with Vite, deployed to `/dist/public`
- Backend: Express.js, deployed as serverless functions
- API Endpoint: `/api` endpoints are handled by the serverless function

## Scaling Considerations

For production use with higher traffic:

1. Consider using a dedicated database with appropriate connection pooling
2. Look into Vercel's Edge Functions for global distribution
3. Set up proper caching with Vercel's Edge Network

## Monitoring

After deployment, monitor your application's performance using:

- Vercel Analytics
- Database performance metrics
- Server logs (available in the Vercel dashboard) 