const CART_DELETE_PRODUCT = 'http://localhost:8000/carts/product/delete'

export function cartDeleteProduct(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(CART_DELETE_PRODUCT, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}