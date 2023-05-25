export function userGetSaved(id, token) {
    const USERS_GET_SAVED = `http://localhost:8000/products/${id}/saved`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(USERS_GET_SAVED, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}