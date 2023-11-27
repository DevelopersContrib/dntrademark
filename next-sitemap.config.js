/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://dntrademark.com',
    generateRobotsTxt: true, // (optional)
    exclude:['/thanks']
    // ...other options
  }