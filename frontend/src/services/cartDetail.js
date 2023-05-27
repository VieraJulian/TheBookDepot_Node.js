export function cartDetail(id, token) {
    const CART_DETAIL_URL = `http://localhost:8000/carts/${id}`
    
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(CART_DETAIL_URL, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}