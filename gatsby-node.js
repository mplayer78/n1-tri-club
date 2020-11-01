const path = require(`path`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === "ContentfulClubEvent"){
    const fileNode = getNode(node.parent)
    console.log('\n', fileNode.relativePath)
  }
}

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulClubEvent {
        edges {
          node {
            name
            description {
              description
            }
            eventDate
            contentful_id
            sessionType {
              name
              regularDay
            }
          }
        }
      }
    }
  `)

  // console.log('result.data.allContentfulClubEvent', result.data.allContentfulClubEvent.nodes)

  result.data.allContentfulClubEvent.edges.forEach(({node}) => {
    createPage({
      path: `training/${node.contentful_id}`,
      component: path.resolve(`./src/templates/club-event.tsx`),
      context: {
        contentful_id : node.contentful_id
      },
    })
  })
}