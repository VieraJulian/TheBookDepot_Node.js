
export function productDelete(id, token) {
    const PRODUCT_DELETE_URL = `http://localhost:8000/products/${id}/delete`

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(PRODUCT_DELETE_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}