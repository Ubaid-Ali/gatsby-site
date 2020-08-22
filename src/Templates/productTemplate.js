import React from "react"
// import { graphql } from "gatsby"
import Layout from '../Components/Layout'

const style = {
  section: {
    textAlign: 'center'
  },
  img: {
    height: '300px',
    width: '300px'
  }
}


const ProductTemplate = ({ data: { contentfulProduct } }) => {
  console.log(contentfulProduct)

  let product = contentfulProduct;

  return (
    <Layout>
      <section style={style.section} >
        <h2>{product.title}</h2>
        <span>
          <img src={product.image.fluid.src} alt={product.title} style={style.img} />
        </span>
        <p>${product.price}</p>
        <p>{product.description.description}</p>
      </section>
    </Layout>
  )
}



export const query = graphql`
query MyQuery($slug: String) {
  contentfulProduct(slug: {eq: $slug}) {
    title
    price
    image {
      fluid {
          src
      }
    }
    slug
    description {
      description
    }
  }
}
`

export default ProductTemplate

