const USER_LOGIN_URL = 'http://localhost:8000/users/login'

export const userLogin = (data) => {
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    return fetch(USER_LOGIN_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}