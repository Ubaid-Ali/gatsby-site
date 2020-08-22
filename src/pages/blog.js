import React from 'react'
import Layout from '../Components/Layout'


const style = {
  blog: {
    textAlign: 'center',
  }
}

const Blog = () => {
    return (
        <Layout>
          <h2 style={style.blog} >Blog Page</h2>  
        </Layout>
    )
}

export default Blog
