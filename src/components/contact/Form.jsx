import { useState } from "react";
import "../../styles/contact/Form.css";
import BtnSend from "./BtnSend";
import Spinner from "./Spinner";




export default function Form() {

    const initialForm = {
        nombre: "",
        email:"",
        telefono:"",
        mensaje:""
    }
    const [form, setForm] = useState(initialForm);

    const initialMessage = {
        message: "",
        color: ""
    }
    const [message, setMessage] = useState(initialMessage);

    const initialSpinner = false

    const [stateSpinner, setStateSpinner] = useState(initialSpinner)

    const cleanFields = () => {
        setForm(initialForm)
    }

    const onInputChange = ( {target} )=> {

        const {name, value} = target;
        setForm({
            ...form,
            [name]: value,
        })

        setMessage(initialMessage)
    }

    const validateFields = () => {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (form.nombre.length < 4) {

            setMessage({

                message: "Ingrese un nombre mayor a 4 letras",
                color: "red"
            });

            return false
        }
        else if(!(regex.test(form.email))) {
            setMessage({

                message: "Ingresa un correo electronico valido",
                color: "red"
            });
            return false;
        }
        else if(!/^[0-9]+$/.test(form.telefono)) {

            setMessage({

                message: "Ingresa solo numeros en el telefono",
                color: "red"
            });

            return false
        }
        else if(form.mensaje.length < 5) {
            
            setMessage({
                message: "Ingrese un texto mayor a 5 digitos",
                color: "red"
            });

        }
        else {

            return true
        }
    }

    const submit = async (e) => {

            e.preventDefault();
            try {   

                    const isOk = validateFields(form)

                    if(isOk) {

                        let objectSubmit = {
        
                            method : "POST",
                            body : JSON.stringify(form),
                            headers : {
                                "Content-type" : "application/json",
                                "Accept": "aplication/json"
                            } 
                        }

                        setStateSpinner(true)

                        const JSONSubmit = await fetch("https://formsubmit.co/ajax/essencecrew.bookings@gmail.com",objectSubmit);
                        const data = await JSONSubmit.json();
                        setStateSpinner(false)

                        if(data.success) {


                            setMessage({
                                message: "Mensaje Enviado",
                                color: "green"
                            })
                            cleanFields();


                        } else {
                                setMessage({
                                message: "Mensaje no enviado",
                                color: "red"
                            })
                        }
                    } 

            } catch {
                        setMessage({
                            message: "Error de coenxion",
                            color: "red"
                        })
            }
    }



    return (
                <div className="contactForm">
                    <div className="background-form"></div>
                    <form>
                        <h2>Envianos tu mensaje</h2>
                        <div className="inputBox">
                            <input type="text" name="nombre" required="required" onChange={onInputChange} value={form.nombre}/>
                            <span className="form-span">Nombre</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="email" required="required" onChange={onInputChange} value={form.email}/>
                            <span className="form-span">Correo</span>
                        </div>
                        <div className="inputBox">
                            <input type="number" name="telefono" required="required" onChange={onInputChange} value={form.telefono}/>
                            <span className="form-span">Telefono</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required" name="mensaje" onChange={onInputChange} value={form.mensaje}></textarea>
                            <span className="form-span">Escribe su Mansaje</span>
                        </div>
                        <div className="box-message ">
                            <h3 className={message.color}>{message.message}</h3>
                        </div>
                        <div className="box-spinner">
                            <Spinner 
                                state= {stateSpinner}
                            />
                        </div>
                        <div className="inputBox box-btn-send">
                            <BtnSend
                                tipo="submit"
                                func = {submit}
                            >Enviar</BtnSend>

                        </div>
                    </form>
                </div>
            )
}

