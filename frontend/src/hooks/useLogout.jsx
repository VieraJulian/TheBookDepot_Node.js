import Cookies from 'universal-cookie';

export function useLogout() {
    const handleLogout = () => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')

        if (cookieGet && cookieGet.userId) {
            Swal.fire({
                icon: 'warning',
                title: '¿Quieres salir?',
                showDenyButton: true,
                confirmButtonText: 'Cerrar sesión'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        cookies.remove('response', { path: '/' });
                        window.location.href = '/'
                    }
                })
        }
    }

    return { handleLogout }
}