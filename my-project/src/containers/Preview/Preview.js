import React from "react";
import { useEffect, useState } from 'react';

import './Preview.css';
import { getProducts } from "../../utils";

import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import ProductCard from "../../components/ProductCard/ProductCard";


const Preview = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, [])


    return (
       <div>
            <HeaderLogo />
            <div className="cards_container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
       </div> 
    )
    
}

export default Preview;