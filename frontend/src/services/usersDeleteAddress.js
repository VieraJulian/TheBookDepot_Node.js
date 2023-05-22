const USER_DELETE_ADDRESS_URL = 'http://localhost:8000/users/addresses/delete'

export function userDeleteAddress(addressId, token) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(addressId)
    }

    return fetch(USER_DELETE_ADDRESS_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })

}