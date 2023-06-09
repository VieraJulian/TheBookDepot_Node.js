export function usersGetOrders(id, token) {
    const USER_GET_ORDERS_URL = `http://localhost:8000/users/${id}/orders`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(USER_GET_ORDERS_URL, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}