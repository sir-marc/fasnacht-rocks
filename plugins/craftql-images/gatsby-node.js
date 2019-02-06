const {createRemoteFileNode} = require(`gatsby-source-filesystem`);
const { GraphQLClient } = require('graphql-request');


exports.sourceNodes = async ({store, cache, createNodeId, actions}) => {
  const {createNode, createNodeField} = actions;
  // Fetch data
  const query = `{
    entries(section:[events], orderBy: "date") {
      ...on Events {
        image {
          url,
          filename
        },
      }
    }
  }`
  console.log('\n')

  const endpoint = process.env.GATSBY_BACKEND_URL + '/api'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer ' + process.env.CRAFTQL_API_KEY,
    },
  })

  const data = await graphQLClient.request(query)
  // use for loop for async/await support
  for (const entry of data.entries) {
    const image = entry.image[0]
    if (image) {
      const imagePath = process.env.GATSBY_BACKEND_URL + image.url

      try {
        const fileNode = await createRemoteFileNode({
          url: imagePath,
          cache,
          store,
          createNode,
          createNodeId,
          filename: image.filename
        });
      } catch (error) {
        console.warn('error creating node', error);
      }
    }
  }
};