const PRODUCT_DELETE_SAVED = 'http://localhost:8000/products/delete/saved'

export function productsDeleteSaved(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(PRODUCT_DELETE_SAVED, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}