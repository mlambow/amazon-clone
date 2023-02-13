import React from 'react'
import "./Banner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

function Banner() {
  return (
    <div className='banner'>
        
        <Carousel autoPlay infiniteLoop 
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <img loading='lazy' src="https://links.papareact.com/gi1" alt="" />
            </div>
                
            <div>
                <img loading='lazy' src="https://links.papareact.com/6ff" alt="" />
            </div>

            <div>
                <img loading='lazy' src="https://links.papareact.com/7ma" alt="" />
            </div>
        </Carousel>

        <div className='banner_div'></div>
        
    </div>
  )
}

export default Banner