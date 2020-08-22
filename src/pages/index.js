import React from "react"
import Layout from '../Components/Layout'

const style = {
  home: {
    textAlign: 'center'
  }
}

export default function Home() {
  return (
    <Layout>
      <h2 style={style.home} >Home Page</h2>
    </Layout>
  )
}
