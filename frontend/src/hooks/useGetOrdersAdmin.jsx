import { adminGetOrders } from "../services/adminGetOrders";
import Cookies from 'universal-cookie';
import { useEffect, useState } from "react";

export function useGetOrdersAdmin(page, size) {
    const [orders, setOrders] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        async function getAdminOrders() {
            const cookies = new Cookies();
            const cookieGet = cookies.get('response')
            const token = cookieGet.token

            const result = await adminGetOrders(page, size, token)
            setOrders(result.orders)
            setTotalPages(result.totalPages)
        }

        getAdminOrders()
    }, [page])

    return { orders, totalPages }
}
