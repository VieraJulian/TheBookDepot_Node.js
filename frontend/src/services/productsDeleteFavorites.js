const PRODUCT_DELETE_FAVORITES = 'http://localhost:8000/products/delete/favorites'

export function productsDeleteFavorites(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(PRODUCT_DELETE_FAVORITES, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}