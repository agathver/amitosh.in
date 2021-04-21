module.exports = {
  siteMetadata: {
    title: 'Amitosh Swain Mahapatra',
    description: `Thoughts and Opinions by Amitosh`,
    author: `@recrsn`,
    contactInfo: {
      email: 'asm@amitosh.in',
      twitter: 'recrsn',
      linkedIn: 'amitosh-swain',
      github: 'recrsn',
      medium: 'amitosh.medium.com'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Cairo', 'IBM Plex Serif'],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
