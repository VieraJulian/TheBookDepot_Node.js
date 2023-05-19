const USER_EDIT_URL = 'http://localhost:8000/users/profile/edit'

export function userEditProfile(formData, token) {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    }

    return fetch(USER_EDIT_URL, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }

        return response.json()
    })
}