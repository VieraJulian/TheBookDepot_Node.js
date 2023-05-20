import React, { useState, useEffect } from 'react';
import { userEditAddress } from '../services/usersEditAddress';
import Cookies from 'universal-cookie';

export function useEditAddress(addresses) {
    const [formValues, setFormValues] = useState([])
    useEffect(() => {
        if (addresses && addresses.length > 0) {
            const initialFormValues = addresses.map((address) => ({
                idAddress: address.id,
                addresse: address.addresse,
                phone: address.phone,
                province: address.province,
                city: address.city,
                address: address.address,
            }));

            setFormValues(initialFormValues);
        }
    }, [addresses]);

    const handleInputChange = (index, event) => {
        const { target } = event
        const { name, value } = target

        const updatedFormValues = [...formValues]
        updatedFormValues[index] = { ...updatedFormValues[index], [name]: value }

        setFormValues(updatedFormValues)
    }

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')
    const token = cookieGet.token

    const handleOnSubmit = async (index, event) => {
        event.preventDefault()

        const data = {
            ...formValues[index]
        }

        const result = await userEditAddress(data, token)

        if (result === 'Edited Address') {
            window.location.href = '/users/profile'
        }
    }

    return { handleInputChange, handleOnSubmit }

}
