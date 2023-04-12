import "../../../public/css/profile-css/information-mobile.css"
import "../../../public/css/profile-css/information-tablet.css"
import "../../../public/css/profile-css/information-desktop.css"

function Information() {
    return (
        <>
            <div className="info-container">
                <form className="info-form">
                    <div className="info-inputs">
                        <label>Nombre:</label>
                        <input type="text" name='firstName' placeholder='Nombre' />
                        <label>Apellidos:</label>
                        <input type="text" name='lastName' placeholder='Apellidos' />
                        <label>Celular:</label>
                        <input type="text" name='phone' placeholder='Celular' />
                        <label>Fecha de nacimiento:</label>
                        <input type="date" name='birtDate' placeholder='Fecha de nacimiento' />
                    </div>
                    <div className="info-img-container">
                        <label>Foto de perfil:</label>
                        <div className="info-div-img">
                            <img src="../../../public/img/balondeoro.jpg" alt="" />
                        </div>
                        <input type="file" name='image' className="img-profile"/>
                    </div>
                    <button className="info-saved">Guardar cambios</button>
                </form>
            </div>
        </>
    )
}

export default Information