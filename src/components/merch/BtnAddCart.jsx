
import "../../styles/merch/BtnAddCart.css";

export default function BtnAddCart({ isThereStock, addToCart, upToCart  }) {
    
    const handleAddToCart = () => {

        const addCart = {
            ...addToCart,
            selectProduct: true
        } 


        upToCart(addCart);
    }

    return (

        <>     
            {
                (isThereStock) ? (

                    <button className="btn-add-cart" onClick={ handleAddToCart }><span>Agregar al Carrito</span><i></i></button>

                ) : (
                    
                    <button className="btn-add-cart disabled" disabled><span>Sin Stock</span><i></i></button>
                )
            }

        </>
    )
}   