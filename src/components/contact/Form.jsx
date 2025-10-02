import "../../styles/contact/Form.css";
import BtnSend from "./BtnSend";


export default function Form() {

    return (
                <div className="contactForm">
                    <div className="background-form"></div>
                    <form>
                        <h2>Envianos tu mensaje</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span className="form-span">Nombre</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span className="form-span">Correo</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span className="form-span">Telefono</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span className="form-span">Escribe su Mansaje</span>
                        </div>
                        <div className="inputBox box-btn-send">

                            <BtnSend
                                tipo="submit"
                            >Enviar</BtnSend>
                        </div>
                    </form>
                </div>
            )
}

