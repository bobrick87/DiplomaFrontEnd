import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './Products.css'
import Table from '../../components/Table/Table';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import { API_URL } from '../../constants/constants';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import ProductForm from '../../components/ProductForm/ProductForm';
import Button from '../../components/Button/Button'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [modalType, setModalType] = useState();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const response = await fetch(`${API_URL}/products/`);
        const data = await response.json();
        setProducts(data);
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        await fetch(`${API_URL}/products/${product.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            })
            await setModalActive(false);
            await getProducts();
    }

    const handleAddProduct = () => {
        setModalType('add');
        setProduct({});
        setModalActive(true);
    }
    console.log(product)
    return (
        <div className='background green'>
            <HeaderLogo />
            <div>
                <Link to="/preview">
                    <Button type='button' className='header_button' onClick value='Preview'/>
                </Link>
                <Button type='button' className='header_button' onClick={handleAddProduct} value='Add product'/>
            </div>
            <div className="container_product_table">
                <Table data={products} setActive={setModalActive} setProduct={setProduct} setModalType={setModalType}/>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive} modalType={modalType}>
                {(modalType === 'delete') 
                    ?   <div>
                            <div>
                                Are u sure you want to delete this product?
                            </div>
                            <div>
                            <Button type='button' className='cancel_button' value='Cancel' onClick={(event) => {event.preventDefault(); setModalActive(false)}} />
                            <Button type='button' className='delete_button' value='Delete' onClick={handleDelete} />
                            </div>
                        </div>
                    : <ProductForm product={product} modalType={modalType} setModalActive={setModalActive} getProducts={getProducts} setProduct={setProduct}/>     
                }
                
            </ModalWindow>
        </div>
    )
}

export default Products;