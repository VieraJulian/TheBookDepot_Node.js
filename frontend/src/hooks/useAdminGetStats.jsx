import { adminGetStats } from '../services/adminGetStats';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export function useAdminGetStats(setLoading) {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        async function getAdminStats() {
            const cookies = new Cookies();
            const cookieGet = cookies.get('response')
            const token = cookieGet.token

            const result = await adminGetStats(token)
            setStats(result)
            setLoading(false)
        }

        getAdminStats()
    }, [])

    return { stats }
}