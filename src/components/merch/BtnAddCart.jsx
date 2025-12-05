
import "../../styles/merch/BtnAddCart.css";

export default function BtnAddCart({ isThereStock }) {
    
    return (

        <>     
            {
                (isThereStock) ? (

                    <button className="btn-add-cart"><span>Agregar al Carrito</span><i></i></button>

                ) : (
                    
                    <button className="btn-add-cart disabled" disabled><span>Sin Stock</span><i></i></button>
                )
            }

        </>
    )
}   