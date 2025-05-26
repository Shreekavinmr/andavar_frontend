const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const hostname = 'https://www.vandsglobalsolutions.com'; // Replace with your domain

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/courses', changefreq: 'monthly', priority: 0.8 },
  { url: '/therapeutic-areas', changefreq: 'monthly', priority: 0.8 },
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/site-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/data-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/trial-supplies', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/medical-writing', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/biostatistics', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/trial-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/global-research', changefreq: 'monthly', priority: 0.7 },
];

// Create sitemap stream
const sitemapStream = new SitemapStream({ hostname });

// Pipe the sitemap stream to a write stream
const writeStream = createWriteStream('./public/sitemap.xml');
sitemapStream.pipe(writeStream);

// Write all URLs to sitemap
links.forEach(link => sitemapStream.write(link));

// Close sitemap stream
sitemapStream.end();

// When streamToPromise resolves, sitemap.xml is fully written
streamToPromise(sitemapStream)
  .then(() => {
    console.log('✅ sitemap.xml created successfully in /public');
  })
  .catch(err => {
    console.error('❌ Error generating sitemap:', err);
  });
