import React, { useState } from 'react';
import { userLogin } from '../services/usersLogin';
import Cookies from 'universal-cookie';

export function useLogin() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { target } = e
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        const result = await userLogin(values)

        if (result.id) {
            const cookies = new Cookies();
            cookies.set('response', { userId: result.id, admin: result.admin, token: result.token }, {
                path: '/',
                expires: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)

            })

            window.location.href = '/'
        }
    }

    return { handleChange, handleOnSubmit, values }
}