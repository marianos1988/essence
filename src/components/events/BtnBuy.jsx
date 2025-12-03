
import "../../styles/events/BtnBuy.css";

export default function BtnBuy({ children, isThereLink }) {
    
    return (

        <>     
            {
                (isThereLink === null) ? (

                    <button className="btn-buy disabled" disabled><span>{children}</span><i></i></button>

                ) : (
                    
                    <button className="btn-buy"><span>{children}</span><i></i></button>
                )
            }

        </>
    )
}   