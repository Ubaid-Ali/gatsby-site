import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout"


const style = {
  section: {
    display: 'flex',
  },
  article: {
    margin: 'auto',
    textAlign: 'center',
    border: '1px solid brown',
  },
  img: {
    height: '200px',
    width: '200px',
  },
}


const Product = ({ data: { allContentfulProduct: { nodes } } }) => {
  // console.log(nodes)

  return (
    <Layout>
      <section style={style.section} >

        {/* Start Map on nodes array */}
        {nodes.map((product) => {
          // console.log(product)
          return (
            <article key={product.title} style={style.article} >
              <h2>{product.title}</h2>
              <img
                src={product.image.fluid.src}
                alt={product.image.title}
                style={style.img}
              />
              <p>${product.price}</p>
              <Link to={`/product/${product.slug}`} > More Info </Link>
            </article>
          )
        })}d
            </section>
    </Layout>
  )
}

export const query = graphql`
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
          description
        }
      }
    }
  }
`

export default Product

