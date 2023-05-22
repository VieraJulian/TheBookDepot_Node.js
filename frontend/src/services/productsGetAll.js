
export function productGetAll(page, size) {
    const PRODUCT_ALL_URL = `http://localhost:8000/products/all?page=${page}&size=${size}`
    
    const options = {
        method: 'GET'
    }

    return fetch(PRODUCT_ALL_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}