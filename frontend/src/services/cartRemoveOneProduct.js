const CART_REMOVE_ONE_PRODUCT = 'http://localhost:8000/carts/remove'

export function cartRemoveOneProduct(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(CART_REMOVE_ONE_PRODUCT, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}