const PRODUCT_TO_SAVED_URL = 'http://localhost:8000/products/toSave'

export function productToSaved(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(PRODUCT_TO_SAVED_URL, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}