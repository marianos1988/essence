import "../../styles/contact/Form.css";


export default function Form() {

    return (
                <div className="contactForm">
                    <form>
                        <h2>Envianos tu mensaje</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Nombre</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Correo</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Telefono</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span>Escribe su Mansaje</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            )
}

