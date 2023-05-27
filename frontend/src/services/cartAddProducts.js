const CART_ADD_PRODUCT_URL = 'http://localhost:8000/carts/product/add'

export function cartAddProduct(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(CART_ADD_PRODUCT_URL, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}