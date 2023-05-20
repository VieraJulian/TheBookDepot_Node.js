import { useState } from "react"
import { userAddressCreate } from "../services/usersAddressCreate"
import Cookies from "universal-cookie"

export function useCreateAddress() {
    const [values, setValues] = useState({
        addresse: '',
        phone: '',
        province: '',
        city: '',
        address: ''
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

    const handleOnSubmit = async (event) => {
        event.preventDefault()

        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const id = cookieGet.userId

        const data = {
            id: id,
            ...values
        }

        const result = await userAddressCreate(data, token)

        if (result === 'Address created') {
            window.location.href = '/users/profile'
        }
    }

    return { handleValuesChange, handleOnSubmit, values }
}