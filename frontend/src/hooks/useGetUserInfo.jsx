import React, { useEffect, useState } from 'react';
import { userInfo } from '../services/usersInfo';
import Cookies from 'universal-cookie';

export function useGetUserInfo(setLoading) {
    const [userInfoProfile, setUserInfoProfile] = useState(null);

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')
    const token = cookieGet.token
    const id = cookieGet.userId

    useEffect(() => {
        async function getUserInfo() {
            const info = await userInfo(id, token)
            setUserInfoProfile(info);
            setLoading(false)
        }

        getUserInfo()
    }, [id])

    return { userInfoProfile }
}