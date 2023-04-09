import React from "react";
import { Formik, Form, Field } from 'formik';
import { API_URL } from "../../constants/constants";

import './ProductForm.css'

const ProductForm = ({ modalType, product, setProduct, setModalActive, getProducts }) => {

    return (
        <div>
            <h1 className="modal_title">{(modalType === 'edit') ? 'Edit product' : 'Add product'}</h1>
            <Formik
                initialValues={{
                    category: product.category ?? '',
                    name: product.name ?? '',
                    quantity: product.quantity ?? '',
                    price: product.price ?? '',
                    description: product.description ?? '',
                }}
                enableReinitialize={true}
                onSubmit={async (values, actions) => { 
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
                        actions.resetForm();

                        
                        
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
                        actions.resetForm();
                    }
                }}
            >
                <Form className='product_form'>
                    <div className="input_container">
                        <label htmlFor="category"className="modal_label">Category</label>
                        <Field id="category" name="category" className='text_green modal_input' />
                    </div>

                    <div className="input_container">
                        <label htmlFor="name" className="modal_label">Name</label>
                        <Field id="name" name="name" className='text_green modal_input'/>
                    </div>

                    <div className="input_container">
                        <label htmlFor="quantity" className="modal_label">Quantity</label>
                        <Field id="quantity" name="quantity" type="number" className='text_green modal_input'/>
                    </div>

                    <div className="input_container">
                        <label htmlFor="price" className="modal_label">Price</label>
                        <Field id="price" name="price" type="number" className='text_green modal_input'/>
                    </div>

                    <div className="input_container">
                        <label htmlFor="description" className="modal_label">Description</label>
                        <Field id="description" name="description" type="textArea" className='text_green modal_textarea'/>
                    </div>
                    
                    <div className='form_buttons'>
                        <button type="button" className="modal_button cancel_button" onClick={() => setModalActive(false)}>Cancel</button>
                        <button type="submit" className="modal_button submit_button">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )

}

export default ProductForm;