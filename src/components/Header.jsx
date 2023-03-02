import React, { useEffect } from 'react'
import "./Header.css"
import { MapPinIcon, MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectItems } from '../basketSlice'
import { useState } from 'react'
import { UserAuth } from '../AuthContext'

function Header() {
    const items = useSelector(selectItems)
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };
      
  return (
    <div>
    <div className='header'>
        <Link to="/">
            <img
                className='header_logo' 
                src="https://links.papareact.com/f90" 
                alt='amazon' 
            />
        </Link>

        <div className='header_search small'>
            <input type='text' className='header_searchInput' />
            <MagnifyingGlassIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
            
                {user ? <div className='header_option' onClick={handleSignOut}>
                    <span className='header_optionOne'>
                    Hello {user.displayName}
                    </span>
                    <span className='header_optionTwo'>
                    Sign Out 
                    </span>
                    </div> :<Link to="/login" className='link'>
                         <div className='header_option'>
                    <span className='header_optionOne'>
                    Hello Guest
                    </span>
                    <span className='header_optionTwo'>
                    Sign In 
                    </span>
                </div>
                </Link>  
                }
                     

            <div className='header_option'>
                <span className='header_optionOne'>
                    Returns
                </span>
                <span className='header_optionTwo'>
                    & Orders 
                </span>
            </div>

            <div className='header_option'>
                <span className='header_optionOne'>
                    Your
                </span>
                <span className='header_optionTwo'>
                    Prime 
                </span>
            </div>

            <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBagIcon className="header_optionBasketIcon" />
                    <span className='header_optionTwo header_basketCount'>
                        {items.length}
                    </span>
                </div>   
            </Link>
            
        </div>
     </div>
       

        <div className="header_bottom">
            <MapPinIcon className='mapPin'/>
            <span className='deliver'>Deliver to South Africa</span>
        </div>

    </div>
  )
}

export default Header