export function search(query) {
    const SEARCH_URL = `http://localhost:8000/search/?p=${query}`

    const options = {
        method: 'GET'
    }

    return fetch(SEARCH_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}