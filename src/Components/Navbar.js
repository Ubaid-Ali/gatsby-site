import React from 'react'
import { Link } from 'gatsby'

const style = {
    container: {
    },
    ul: {
        display: 'flex',
        listStyle: 'none',
    },
    
    li: {
        margin: '2%'
    }
}


const Navbar = () => {
    return (
        <div style={style.container}>
            <ul style={style.ul}>

                <li style={style.li}>
                    <Link to='/' >Home</Link>
                </li>
                <li style={style.li}>
                    <Link to='/product'>Product</Link>
                </li>
                <li style={style.li}>
                    <Link to='/blog' >Blog</Link>
                </li>

            </ul>
            <hr />
        </div>
    )
}

export default Navbar
