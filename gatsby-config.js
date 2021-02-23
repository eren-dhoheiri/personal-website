module.exports = {
  siteMetadata: {
    title: "Eren | Personal Website",
    siteUrl: "http://erendhoheiri.me",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Signika`, `source sans pro\:300,400,600`, `Fira Sans`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130172537-1",
        head: false,
      },
    },
  ],
};
