import "../../../../public/css/components/profile/information/information-mobile.css"
import "../../../../public/css/components/profile/information/information-desktop.css"

function Information({ userInfoProfile }) {
    return (
        <>
            <div className="info-container">
                <p className="p-info">Mi Perfil</p>
                <form className="info-form" method="POST">
                    <div className="info-inputs">
                        <label>Nombre:</label>
                        <input type="text" name='firstName' placeholder='Nombre' defaultValue={userInfoProfile.firstName} />
                        <label>Apellidos:</label>
                        <input type="text" name='lastName' placeholder='Apellidos' defaultValue={userInfoProfile.lastName} />
                        <label>Celular:</label>
                        <input type="text" name='phone' placeholder='Celular' defaultValue={userInfoProfile.phone} />
                        <label>Fecha de nacimiento:</label>
                        <input type="date" name='birtDate' placeholder='Fecha de nacimiento' defaultValue={userInfoProfile.birthDate} />
                    </div>
                    <div className="info-img-container">
                        <label>Foto de perfil:</label>
                        <div className="info-div-img">
                            <img src={userInfoProfile.image} alt={userInfoProfile.firstName} />
                        </div>
                        <input type="file" name='image' className="img-profile" />
                    </div>
                    <div className="button-saved-container">
                        <button className="info-saved">Guardar cambios</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Information