import React from 'react'
import Banner from './Banner'
import ProductFeed from './ProductFeed'
import "../App.css"

function Home({ products }) {
  return (
    <div className='main'>
        <Banner />
        <ProductFeed products={products} />
    </div>
  )
}

export default Home