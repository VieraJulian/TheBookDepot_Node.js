import { adminOrderDelivered } from "../services/adminOrderDelivered";
import Cookies from 'universal-cookie';

export function useAdminOrderDelivered() {
    const handleOrderDelivered = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token

        const data = {
            orderId: id,
        }

        const result = await adminOrderDelivered(data, token)

        if (result === "Order updated") {
            window.location.reload()
        }
    }

    return { handleOrderDelivered }
}