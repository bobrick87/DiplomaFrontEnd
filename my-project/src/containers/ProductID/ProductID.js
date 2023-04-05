import React from "react";
import { useEffect, useState } from 'react'

import { BsPatchCheck } from "react-icons/bs";

import './ProductID.css'
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { API_URL } from '../../constants/constants';

import { useParams } from "react-router-dom";

const ProductID = () => {

    const { productId } = useParams();


    const [product, setProduct] = useState({});

    const getProductId = async(productId) => {
        const response = await fetch(`${API_URL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        console.log(data)
    }

    useEffect(() => {
        getProductId(productId);
    }, [])

    
    return (
        <div className="productId_page_container">
            <HeaderLogo />
            <div className="productId_container">
                <div className="productId_name">{product.name}</div>
                <div className="productId_data">
                    <div className="productId_image_container"><img className="productId_image" src={product.image} alt={product.name}/></div>
                    <div className="productId_side_container">
                        <div className="productId_in_stock text_green"><BsPatchCheck className="productId_check_icon"/>     Є в наявності</div>
                        <div className="productId_price">{product.price}₴</div>
                        <div className="productId_quantity">Кількість:{product.quantity}</div>
                    </div>
                </div>
                <div className="productId_description_container">
                    <h1 className="productId_description_title">Опис <span className="productId_description_name">{product.name}</span></h1>
                    <div className="productId_description_text">{product.description}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductID;