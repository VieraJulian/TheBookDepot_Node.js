const ADMIN_ORDER_DELIVERED_URL = 'http://localhost:8000/admins/orders/delivered'

export function adminOrderDelivered(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(ADMIN_ORDER_DELIVERED_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}