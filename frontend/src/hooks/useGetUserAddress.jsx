import React, { useEffect, useState } from 'react';
import { userAddresses } from '../services/usersAddresses';
import Cookies from 'universal-cookie';

export function useGetUserAddresses() {
    const [addresses, setAddresses] = useState([]);

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')

    if (!cookieGet) {
        return 
    }
    
    const token = cookieGet.token
    const id = cookieGet.userId

    useEffect(() => {
        async function getUserAddresses() {
            const data = await userAddresses(id, token)
            setAddresses(data);
        }

        getUserAddresses();
    }, [])

    return { addresses }
}