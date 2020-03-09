module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-codehive',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`
      }
    },
    `gatsby-plugin-typescript`,
  ]
}
