import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import "./CheckoutProduct.css"
import { addToBasket, removeFromBasket } from "../basketSlice"
import { useDispatch } from 'react-redux'

function CheckoutProduct({ id, title, price, category, description, rating, image }) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  const addItemToBasket = () => {
    const product = {
      id, title, price, category, description, rating, image
    }
    dispatch(addToBasket(product))
  }

  const currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div className='checkoutProduct'>
        <img src={image} height={200} width={200} objectfit="contain" />
        <div className='checkoutProduct_details'>
            <h3>{title}</h3>
            <div className="icon">
                {Array(rating).fill().map((_, index) => {
                    <StarIcon />
                })}
            </div>

            <p className='checkoutProduct_description'>{description}</p>
            <p>{currency.format(price)}</p>
            
        </div>

        <div className='checkout_button'>
          <button className='button_checkout' onClick={addItemToBasket}>Add to bag</button>
          <button className='button_checkout' onClick={removeItemFromBasket}>Remove from the bag</button>
        </div>
      </div>
  )
}

export default CheckoutProduct