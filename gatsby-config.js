module.exports = {
  siteMetadata: {
    siteUrl: "https://www.vanhanen.dev",
    title: "homepage"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`, 
        allExtensions: true
      }
    },
    'gatsby-plugin-emotion'
  ]
}
