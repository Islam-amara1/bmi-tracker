# 🚀 Deploy to Vercel Guide

## Quick Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd /home/islam/projects/pdf
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default or enter custom name)
   - Directory? (Press Enter - it's already in the pdf directory)
   - Override settings? **No**

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/pdf-editor.git
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository or upload files
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Click "Deploy"

## Important Notes

### File Size Limits
- Vercel has a 50MB limit for serverless functions
- Your `node_modules` might be large - Vercel will handle this automatically
- Large dependencies like `puppeteer` might cause issues

### Environment Variables
If you need environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any required variables (like `PORT` if needed)

### Timeout Settings
- Default timeout: 10 seconds
- Updated in `vercel.json` to 30 seconds for PDF processing
- For longer operations, consider Vercel Pro plan

### Static Files
- Files in `public/` folder are automatically served
- No additional configuration needed

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `index.js` exports the Express app correctly
- Check Vercel build logs for specific errors

### Function Timeout
- Increase `maxDuration` in `vercel.json`
- Consider optimizing PDF processing
- Use Vercel Pro for longer timeouts (up to 60s)

### Large Dependencies
- Some packages like `puppeteer` are very large
- Consider using lighter alternatives
- Vercel will warn about large dependencies

## After Deployment

1. **Get your URL**: Vercel will provide a URL like `https://your-project.vercel.app`
2. **Test your app**: Visit the URL and test all features
3. **Custom Domain** (optional): Add your domain in Vercel Dashboard

## Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```

## Project Structure for Vercel

```
pdf/
├── index.js          # Main server file (exports app)
├── vercel.json       # Vercel configuration
├── package.json      # Dependencies
├── routes/           # API routes
├── views/            # EJS templates
└── public/           # Static files (auto-served)
```

Your app is ready to deploy! 🎉

