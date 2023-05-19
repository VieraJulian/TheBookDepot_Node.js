import { useState } from "react";
import { userEditProfile } from "../services/usersEditProfile";
import Cookies from 'universal-cookie';

export function useEditProfile({ userInfoProfile }) {
    const [image, setImage] = useState(null)
    const [values, setValues] = useState({
        firstName: userInfoProfile.firstName,
        lastName: userInfoProfile.lastName,
        phone: userInfoProfile.phone,
        birthDate: userInfoProfile.birthDate
    })

    const handleValuesChange = (event) => {
        const { target } = event
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const id = cookieGet.userId

        const formData = new FormData()

        formData.append('id', id)
        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        formData.append('birthDate', values.birthDate)
        formData.append('phone', values.phone)
        formData.append('image', image)


        const result = await userEditProfile(formData, token)

        if (result === 'Edited profile') {
            window.location.href = '/users/profile'
        }
    }

    return { handleValuesChange, handleImageChange, handleOnSubmit }
}