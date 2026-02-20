# Deployment Guide — IDM Multifunctional

## Vercel Deployment (Recommended)

### 1. Prerequisites
- GitHub repository: https://github.com/fabian129/iDMmultifunctional
- Vercel account (free tier works)

### 2. Deploy Steps
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select `fabian129/iDMmultifunctional`
4. Configure environment variables (see below)
5. Click "Deploy"

### 3. Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Your production URL |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` | From Google Analytics |
| `SANITY_PROJECT_ID` | `your_project_id` | From Sanity dashboard |
| `SANITY_DATASET` | `production` | Sanity dataset name |
| `SANITY_API_TOKEN` | `your_api_token` | From Sanity dashboard |

### 4. Build Settings
- **Framework Preset:** Next.js (auto-detected)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

### 5. Post-Deployment
- [ ] Test site at Vercel URL
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices
- [ ] Configure custom domain
