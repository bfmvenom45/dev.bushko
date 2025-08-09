# DNS Configuration Templates

## For Vercel Deployment

### DNS Records to add in your domain registrar:
```
# Root domain
Type: A
Name: @
Value: 76.76.19.61

# WWW subdomain  
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Alternative for root (if A record doesn't work)
Type: CNAME
Name: @
Value: alias.vercel-dns.com
```

## For Netlify Deployment

### DNS Records:
```
# Root domain
Type: A  
Name: @
Value: 75.2.60.5

# WWW subdomain
Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

## For Cloudflare Pages

### DNS Records:
```
# Root domain
Type: A
Name: @
Value: [Cloudflare will provide]

# WWW subdomain  
Type: CNAME
Name: www
Value: [your-site].pages.dev
```

## Domain Suggestions:

### Premium Developer Domains:
- bushko.dev ($15/year) ⭐
- devbushko.com ($12/year)
- sbushko.dev ($15/year)

### Classic Options:
- bushko.me ($20/year)
- sanyabushko.com ($12/year)
- bushko.io ($35/year)

### Budget Options:
- bushko.site ($3/year)
- bushko.online ($6/year)
- dev-bushko.com ($12/year)
