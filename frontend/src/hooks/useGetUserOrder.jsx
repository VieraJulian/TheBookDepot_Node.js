import { useEffect, useState } from "react"
import { usersGetOrders } from "../services/usersGetOrders"
import Cookies from "universal-cookie"

export function useGetUserOrder(setLoading) {
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        async function getUsersOrders() {

            const cookies = new Cookies();
            const cookieGet = cookies.get('response')
            const token = cookieGet.token
            const userId = cookieGet.userId

            const result = await usersGetOrders(userId, token)
            setOrders(result)
            setLoading(false)
        }

        getUsersOrders()
    }, [])

    return { orders }
}