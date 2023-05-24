const PRODUCT_EDIT_URL = 'http://localhost:8000/products/edit'

export function editProduct(formData, token) {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    }

    return fetch(PRODUCT_EDIT_URL, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}