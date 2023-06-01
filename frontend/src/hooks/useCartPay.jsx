import { cartPay } from '../services/cartPay'
import Cookies from 'universal-cookie';

export function useCartPay({ clearCart, addressId }) {
    const pay = async () => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const userId = cookieGet.userId

        const cart = JSON.parse(localStorage.getItem('cart'))

        const data = {
            id: userId,
            addressId: addressId,
            products: cart
        }

        const result = await cartPay(data, token)

        clearCart()
    }

    return { pay }
}