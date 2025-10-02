
import "../../styles/contact/BtnSend.css";

export default function BtnBuy({ children, tipo }) {

    
    return (

        <>
             <button type={tipo} className="btn-send"><span>{children}</span><i></i></button>
        </>
    )
}  