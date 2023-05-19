export const productDetail = (id, token) => {
    const PRODUCT_DETAIL_URL = `http://localhost:8000/products/${id}/detail`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(PRODUCT_DETAIL_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })

}