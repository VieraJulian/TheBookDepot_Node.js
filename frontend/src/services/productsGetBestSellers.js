export function productsGetBestSellers(page, size) {
    const PRODUCT_GET_BESTSELLER_URL = `http://localhost:8000/products/bestSellers?page=${page}&size=${size}`

    const options = {
        method: 'GET'
    }

    return fetch(PRODUCT_GET_BESTSELLER_URL,  options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}