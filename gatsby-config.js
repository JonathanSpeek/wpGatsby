module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: '206.189.170.230',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
