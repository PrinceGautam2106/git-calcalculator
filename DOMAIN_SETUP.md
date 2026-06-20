# Custom Domain Setup for CalaiFitness

## Recommended Domain Options (in order of preference):

1. **calaifitness.com** - Clean, brandable, easy to remember
2. **calai.fit** - Modern .fit extension, perfect for fitness
3. **getcalai.com** - Action-oriented with verb
4. **calai.app** - Modern app platform feel

## Setup Instructions

### Option A: Domain already on Cloudflare

If you register domain through Cloudflare Registrar or transfer it to Cloudflare:

```bash
# Add custom domain to Pages project
wrangler pages domain add calaifitness.com --project-name=fitnescal
```

### Option B: Domain on external registrar

1. **Add domain in Cloudflare Dashboard:**
   - Go to: https://dash.cloudflare.com/
   - Navigate to: Workers & Pages → fitnescal → Custom domains
   - Click "Set up a custom domain"
   - Enter: `calaifitness.com`
   - Click "Continue"

2. **Update DNS at your registrar:**
   Copy the nameservers shown and update at your domain registrar:
   ```
   NS: nameserver1.cloudflare.com
   NS: nameserver2.cloudflare.com
   ```

3. **Or use CNAME (faster):**
   Add this CNAME record at your registrar:
   ```
   Type: CNAME
   Name: @ (or leave blank for root)
   Value: fitnescal.pages.dev
   TTL: Auto or 3600
   ```

### Quick Commands

```bash
# View current domains
wrangler pages project list

# Add domain (if on Cloudflare)
wrangler pages domain add calaifitness.com --project-name=fitnescal

# Check deployment
wrangler pages deployment list --project-name=fitnescal
```

## After Domain is Connected

Update these files with new domain:

1. **astro.config.mjs** - Update site URL
2. **sitemap.xml.ts** - Update base URL
3. **robots.txt** - Update sitemap URL
4. **Layout.astro** - Update canonical URLs and OG tags

## Current Status

- Project: fitnescal
- Default URL: https://fitnescal.pages.dev
- Latest: https://10a735a4.fitnescal.pages.dev
- Custom domain: Not configured yet

## Next Steps

1. Purchase domain (calaifitness.com recommended)
2. Add to Cloudflare account
3. Run: `wrangler pages domain add calaifitness.com --project-name=fitnescal`
4. Update code with new domain name
5. Redeploy
