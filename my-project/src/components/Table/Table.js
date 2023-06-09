import React from "react";
import { IoTrash, IoPencil } from "react-icons/io5";

import './Table.css'

const Table = ({ data, setActive, setProduct, setModalType }) => {

    const editItem = (event) => {
        setProduct(data.find((product) => product.id === event.target.closest('tr').id));
        setModalType('edit');
        setActive(true);
    }

    const deleteItem = (event) => {
        setProduct(data.find((product) => product.id === event.target.closest('tr').id));
        setModalType('delete');
        setActive(true);
    }
    

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price(₴)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {data.map((dataItem) => (
                <tr key={dataItem.id} id={dataItem.id}>
                    <td>{dataItem.id}</td>
                    <td>{dataItem.category}</td>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.quantity}</td>
                    <td>{dataItem.price}</td>
                    <td>
                        <span className="icon" onClick={editItem}> <IoPencil /> </span> 
                        <span className="icon" onClick={deleteItem}> <IoTrash /> </span>
                    </td>

                </tr>
                
            ))}
            </tbody>
        </table>
        
    )
}

export default Table;