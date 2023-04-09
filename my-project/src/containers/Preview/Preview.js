import React from "react";
import { useEffect, useState } from 'react';

import './Preview.css';
import { API_URL } from '../../constants/constants';

import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import ProductCard from "../../components/ProductCard/ProductCard";



const Preview = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = async () => {
        const response = await fetch(`${API_URL}/products/`);
        const data = await response.json();
        setProducts(data);
        console.log(data)
    }


    return (
       <div>
            <HeaderLogo />
            <div className="cards_container">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
       </div> 
    )
    
}

export default Preview;