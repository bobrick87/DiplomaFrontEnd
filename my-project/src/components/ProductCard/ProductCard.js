import React from "react";
import { Link } from "react-router-dom";

import { IoCartOutline } from "react-icons/io5";

import './ProductCard.css'

const ProductCard = ({ product }) => {
    
    const url = `/products/${product.id}`

    return (
        <div className="card_container">
            <div className="card_image">
                <img src={product.image}  alt={product.name} />
            </div>
            <div className="card_name"><Link to={url}>{product.name}</Link></div>
            <div className="card_info">
                <div className="card_price">{Math.trunc(product.price)}₴</div>
                <div className="card_quantity">Кількість: {product.quantity}</div>
            </div>
            <div className="card_info text_green">
                <span className="card_icon"> <IoCartOutline /> </span>
                <div>Готовий до відправки</div>
            </div>
        </div>
    )
}

export default ProductCard;