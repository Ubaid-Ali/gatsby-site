import React from 'react'
import Layout from '../Components/Layout'

const style = {
    section: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'wrap',
        alignItems: 'center'
    },
    img: {
        height: '300px',
        width: '300px'
    }
}


const ProductTemplate = ({ pageContext: { data } }) => {
    console.log(data)


    return (
        <Layout>
            <section style={style.section} >
                <h2>{data.title}</h2>
                <span>
                    <img src={data.image.fluid.src} alt={data.title} style={style.img} />
                </span>
                <p>${data.price}</p>
                <p>{data.description.description}</p>
            </section>
        </Layout>
    )
}

export default ProductTemplate
