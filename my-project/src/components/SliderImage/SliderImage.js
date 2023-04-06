import React from "react";
import Slider from "react-slick";

import './SliderImage.css'
// import "~slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const SliderImage = ({ product }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'productId_image'

      };
    
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img width="396px" height="268px" src={product.image} alt={product.name} />
                </div>
                <div>
                    <img width="396px" height="268px" src={product.image2} alt={product.name} />
                </div>
                <div>
                    <img width="396px" height="268px" src={product.image3} alt={product.name} />
                </div>
            </Slider>
        </div>
    )
}

export default SliderImage;