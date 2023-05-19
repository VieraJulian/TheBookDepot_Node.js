import React, { useState } from 'react'
import { userRegister } from '../services/usersRegister'

export function useRegister() {
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        phone: '',
        email: '',
        password: ''
    })

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()

        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        formData.append('birthDate', values.birthDate)
        formData.append('phone', values.phone)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('image', image)

        const result = await userRegister(formData)

        if (result === "User registered") {
            window.location.href = '/users/login'
        }
    }

    return { handleImageChange, handleChange, handleOnSubmit, values }
}