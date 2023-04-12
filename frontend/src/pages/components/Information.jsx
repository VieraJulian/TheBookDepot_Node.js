import "../../../public/css/components/information/information-mobile.css"
import "../../../public/css/components/information/information-desktop.css"

function Information() {
    return (
        <>
            <div className="info-container">
                <p className="p-info">Mi Perfil</p>
                <form className="info-form" method="POST">
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