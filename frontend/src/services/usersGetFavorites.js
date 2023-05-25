export function usersGetFavorites(id, token) {
    const USER_GET_FAVORITES_URL = `http://localhost:8000/products/${id}/favorites`

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(USER_GET_FAVORITES_URL, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}