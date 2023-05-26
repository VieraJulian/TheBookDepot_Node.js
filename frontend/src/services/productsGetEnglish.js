export function productsGetEnglish(page, size) {
    const PRODUCT_GET_ENGLISH_URL = `http://localhost:8000/products/english?page=${page}&size=${size}`

    const options = {
        method: 'GET'
    }

    return fetch(PRODUCT_GET_ENGLISH_URL,  options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}