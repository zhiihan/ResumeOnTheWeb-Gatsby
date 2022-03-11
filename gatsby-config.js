const path = require(`path`);
require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `Amruth Pillai's Resume on the Web`,
    description: `Everyone needs their own little spot on the interwebs, and this is mine. Welcome to my resume, on the web!`,
    author: `Amruth Pillai`,
    siteUrl: `https://amruthpillai.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://amruthpillai.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://amruthpillai.com`,
        sitemap: `https://amruthpillai.com/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amruth Pillai's Resume on the Web`,
        short_name: `Resume on the Web`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:400,600`],
        display: `swap`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `amruthpillai`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      },
    },
  ],
};
