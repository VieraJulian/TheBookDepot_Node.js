import Cookies from 'universal-cookie';
import { payment } from '../services/payment';

export function useCartPay({ addressId }) {
    const pay = async () => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const userId = cookieGet.userId

        const cart = JSON.parse(localStorage.getItem('cart'))

        const data = {
            userId,
            addressId,
            cart
        }

        const result = await payment(data, token)

        window.location.href = result.init_point
    }

    return { pay }
}