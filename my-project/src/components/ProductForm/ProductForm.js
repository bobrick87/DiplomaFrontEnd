import React from "react";
import { Formik, Form, Field} from 'formik';
import { API_URL } from "../../constants/constants";

import './ProductForm.css'

const ProductForm = ({ modalType, product, setProduct, setModalActive, getProducts }) => {

    return (
        <div>
            <h1>{(modalType === 'edit') ? 'Edit product' : 'Add product'}</h1>
            <Formik
                initialValues={{
                    category: product.category,
                    name: product.name,
                    quantity: product.quantity,
                    price: product.price,
                    description: product.description,
                }}
                enableReinitialize={true}
                onSubmit={async (values) => { 
                    if (modalType === 'edit') {
                        await fetch(`${API_URL}/products/${product.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                        })
                        await setModalActive(false);
                        await getProducts();
                        
                        
                    } else if (modalType === 'add') {
                        await fetch(`${API_URL}/products`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                        })
                        await setProduct({});
                        await setModalActive(false);
                        await getProducts();
                    }
                }}
            >
                <Form className='product_form'>
                    <label htmlFor="category">Category</label>
                    <Field id="category" name="category" />

                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" />

                    <label htmlFor="quantity">Quantity</label>
                    <Field id="quantity" name="quantity" type="number" />

                    <label htmlFor="price">Price</label>
                    <Field id="price" name="price" type="number" />

                    <label htmlFor="description">Description</label>
                    <Field id="description" name="description" type="textArea" />
                    
                    <div className='form_buttons'>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => setModalActive(false)}>Cancel</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default ProductForm;