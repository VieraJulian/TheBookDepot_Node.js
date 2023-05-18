const PRODUCT_CREATE_URL = 'http://localhost:8000/products/create'

export const productCreate = (formData, token) => {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    }

    return fetch(PRODUCT_CREATE_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}