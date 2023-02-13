import React, { useState } from 'react'
import { StarIcon } from "@heroicons/react/24/solid"
import "./Product.css"
import {useDispatch} from "react-redux"
import { addToBasket } from "../basketSlice"


function Product({ id, title, price, description, category, image }) {

  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() + 1) * 6
  )

  const addItemToBasket = () => {
    const product = {
      id, title, price, description, category, image, rating
    };
    dispatch(addToBasket(product))
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div className="product">
      <p className='product_category'>{category}</p>

      <img src={image} width={200} height={200} objectfit="contain" className='product_image' />
      
      <h4 className='product_title'>{title}</h4>

      <div className='product_rating'>
        {Array(rating).fill().map((_, index) => {
          <StarIcon className="icon"/>
        })} 
      </div>
      

      <p className='product_description'>{truncate(description, 200)}</p>

      <div>
        <p>{currency.format(price)}</p>
      </div>
      
      <button className='button' onClick={addItemToBasket}>Add to bag</button>

    </div>
  )
}

export default Product