import { API_URL } from "./constants/constants";

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products/`);
    const data = await response.json();
    return data;
}

// export const changingData = async (modalType, product) => {
    
//     let method, url;

//     switch (modalType) {
//         case 'edit':
//             method = 'PUT'
//             url = `${API_URL}/products/${product.id}`
//             break;

//         case 'add':
//             method = 'POST'
//             break;

//         default:
//             method = 'DELETE'
//             break;
//     }
    
// }