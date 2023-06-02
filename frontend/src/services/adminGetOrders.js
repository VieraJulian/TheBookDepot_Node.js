export function adminGetOrders(page, size, token) {
    const ADMIN_ORDERS_URL = `http://localhost:8000/admins/orders/details?page=${page}&size=${size}`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(ADMIN_ORDERS_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}