const ADMIN_STATS_URL = 'http://localhost:8000/admins/stats'

export function adminGetStats(token) {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return fetch(ADMIN_STATS_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json()
        })
}