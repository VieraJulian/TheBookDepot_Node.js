export function userInfo(id, token) {
    const USER_INFO_URL = `http://localhost:8000/users/${id}/profile`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(USER_INFO_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}