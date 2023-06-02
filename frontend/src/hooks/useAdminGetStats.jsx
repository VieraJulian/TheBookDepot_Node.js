import { adminGetStats } from '../services/adminGetStats';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export function useAdminGetStats() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        async function getAdminStats() {
            const cookies = new Cookies();
            const cookieGet = cookies.get('response')
            const token = cookieGet.token

            const result = await adminGetStats(token)
            setStats(result)
        }

        getAdminStats()
    }, [])

    return { stats }
}