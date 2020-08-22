// const { default: Product } = require("./src/pages/product");
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allContentfulProduct {
          nodes {
            title
            price
            slug
            image {
              fluid {
                src
              }
            }
            description {
              description
            }
          }
        }
      }
    `)
    console.log(`result is ......`, result);

    result.data.allContentfulProduct.nodes.forEach(data => {
        // console.log(data)
        createPage({
            path: `/product/${data.slug}`,
            component: path.resolve('./src/Templates/productTemplate.js'),
            context: {
                data: data
            }
        })
    });

}