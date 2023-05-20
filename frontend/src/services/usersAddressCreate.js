const USERS_CREATE_URL = 'http://localhost:8000/users/addresses/create'

export function userAddressCreate(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(USERS_CREATE_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}