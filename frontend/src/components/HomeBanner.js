'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function HomeBanner(){
    return (  
    <Carousel showThumbs={false}>
        <div>
            <img src="banner/ad_new.jpg" />
          
        </div>
        <div>
            <img src="banner/ad_new.jpg" />
            
        </div>
        
    </Carousel>)
}