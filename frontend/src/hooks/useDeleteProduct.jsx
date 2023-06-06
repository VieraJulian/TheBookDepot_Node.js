import { productDelete } from "../services/productsDelete";
import Cookies from "universal-cookie"

export function useDeleteProduct() {
    const handleDeleteProduct = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token

        Swal.fire({
            icon: 'warning',
            title: '¿Seguro que quieres eliminar este producto?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    productDelete(id, token)
                        .then((result) => {
                            if (result === 'Product deleted') {
                                window.location.href = '/admin'
                            }
                        })
                }
            })


    }

    return { handleDeleteProduct }
}