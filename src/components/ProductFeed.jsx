import React from 'react'
import { useEffect, useState } from 'react'
import "./ProductFeed.css"
import axios from "axios"
import Product from './Product'
import "./ProductFeed.css"
import "./Product.css"

function ProductFeed({ id, title, price, description, category, image }) {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const actualData = await axios.get("https://fakestoreapi.com/products")
            setData(actualData.data)
            console.log(actualData.data)
        }
        getData()
    }, [])

  return (
    <div className='productFeed'>
        {data.map(({ id, title, price, description, category, image }) => (
            <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
    </div>
  )
}

export default ProductFeed