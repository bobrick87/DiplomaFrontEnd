import { API_URL } from "./constants/constants";

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products/`);
    const data = await response.json();
    return data;
}

// export const changingData = async (modalType, product, values, actions, setProducts, setModalActive) => {
    
//     let method, url;

//     switch (modalType) {
//         case 'edit':
//             method = 'PUT';
//             url = `${API_URL}/products/${product.id}`;
//             break;

//         case 'add':
//             method = 'POST';
//             url = `${API_URL}/products`;
//             break;

//         default:
//             method = 'DELETE';
//             url = `${API_URL}/products/${product.id}`;
//             break;
//     }

//     await fetch(url, {
//         method: {method},
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(values)
//         })
//         await setModalActive(false);
//         await getProducts().then(setProducts);
//         actions.resetForm();
    
// }