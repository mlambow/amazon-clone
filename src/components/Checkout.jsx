import React from 'react'
import { useSelector } from 'react-redux'
import { UserAuth } from '../AuthContext'
import { selectItems, selectTotal } from '../basketSlice'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe('pk_test_51MWdehAJKBSZPkcPNZJRZkAcPEdKSFBsh7kRB0mhKtKPY5qzAKqALCfKtPz5F7wyWUXgs6V38aCoDhYglDKHvir700etQKTXs3') 


function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const { user } = UserAuth();

    const currency = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    const createCheckoutSession = async () => {
        const stripe = await stripePromise

        const checkoutSession = await axios.post('create-checkout-session', {
            items: items,
            email: user.email
        })

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
       
        if (result.error) {
            alert(result.error.message)
        }
    }

  return (
    <div className="checkout">
        
        <main className="checkout_main">
            <div className='checkout_main_left'>
                <img 
                    src="https://links.papareact.com/ikj"
                    width='100%'
                    height={250}
                    objectfit="contain"
                />

                <div className="main_left_product">
                    <h1>{items.length === 0 ? "Your bag is empty" : "Your Shopping Bag" }</h1>
                    
                    {items.map(({ id, title, price, description, category, image }, i) => (
                        <CheckoutProduct 
                            key={i}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    ))}
                
                </div>
            </div>

            <div className='checkout_main_right'>
                {items.length > 0 && 
                    <div>
                      <h2>Subtotal <span>({items.length} items):</span> 
                            <span className='price'>
                                {currency.format(total)}
                            </span>
                        </h2>

                        <button 
                          disabled={!user}
                          className={!user ? 'button-gray' : 'button'}
                          onClick={createCheckoutSession}
                          >
                            {!user ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </button>
                        <p>(Coming soon)</p>
                    </div>
                }
                
            </div>
        </main>
    </div>
  )
}

export default Checkout