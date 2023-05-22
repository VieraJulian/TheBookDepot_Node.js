import Cookies from 'universal-cookie';
import { userDeleteAddress } from '../services/usersDeleteAddress';

export function useDeleteAddress() {
    const handleDeleteAddress = async (id, event) => {
        event.preventDefault()

        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token

        const data = {
            addressId: id,
        }

        const result = await userDeleteAddress(data, token)

        if (result === "Address deleted") {
            window.location.href = '/users/profile'
        }
    }

    return { handleDeleteAddress }
}
