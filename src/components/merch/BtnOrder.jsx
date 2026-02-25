
import "../../styles/merch/BtnOrder.css";

export default function BtnAddCart({ isThereStock, addToCart, upToCart  }) {
    
    const handleOrder = () => {

    }

    return (

        <>        
                        {
                (isThereStock) ? (

                    <button className="btn-order" onClick={ handleOrder}><span>Realizar Pedido</span><i></i></button>

                ) : (
                    
                    <button className="btn-order disabled" disabled><span>Realizar Pedido</span><i></i></button>
                )
            }
        </>
    )
}   