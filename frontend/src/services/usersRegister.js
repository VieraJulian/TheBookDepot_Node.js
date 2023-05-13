const USER_REGISTER_URL = 'http://localhost:8000/users/register'

export const userRegister = (formData) => {
    const options = {
        method: 'POST',
        body: formData
    }

    return fetch(USER_REGISTER_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}