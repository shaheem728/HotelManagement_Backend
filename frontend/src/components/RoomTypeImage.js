'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function RommTypeImage(){
    return (  
    <Carousel showThumbs={false} >
        <div>
            <img src="/thump/image-placeholder-500x500.jpg" />
          
        </div>
        <div className=" h-25">
            <img src="/thump/image-placeholder-500x500.jpg" />
          
        </div>
        <div className=" h-25">
            <img src="/thump/image-placeholder-500x500.jpg" />
          
        </div>
       
        
    </Carousel>)
}