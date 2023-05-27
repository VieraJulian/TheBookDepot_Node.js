const CART_ADD_ONEMORE_PRODUCT = 'http://localhost:8000/carts/add'

export function cartAddOneMoreProduct(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(CART_ADD_ONEMORE_PRODUCT, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}