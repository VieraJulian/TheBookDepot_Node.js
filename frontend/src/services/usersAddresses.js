export function userAddresses(id, token) {
    const USER_ADDRESSES_URL = `http://localhost:8000/users/${id}/addresses`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(USER_ADDRESSES_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}