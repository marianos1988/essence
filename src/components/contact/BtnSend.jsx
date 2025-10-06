
import "../../styles/contact/BtnSend.css";

export default function BtnBuy({ children, tipo, func }) {

    
    return (

        <>
             <button type={tipo} className="btn-send" onClick={func}><span>{children}</span><i></i></button>
        </>
    )
}  