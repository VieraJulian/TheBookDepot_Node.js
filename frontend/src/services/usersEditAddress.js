const USER_EDITADDRESS_URL = 'http://localhost:8000/users/addresses/edit'

export function userEditAddress(data, token) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    return fetch(USER_EDITADDRESS_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            // "Edited Address"
            return response.json()
        })
}