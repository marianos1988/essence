
import "../../styles/merch/BtnOrder.css";

export default function BtnOrder({ isThereStock, listOrder, total}) {
    
    
    const generarMensaje = () => {

        const fecha = new Date().toLocaleDateString("es-AR");

        const productos = listOrder.map(p => {


            return `
        Producto: ${p.name}

        Cantidad: ${p.quantity}

        Precio unitario: $${p.price}

        Subtotal: $${p.subtotal}`;

        }).join("\n\n");

        const texto = `
        *Solicitud de nuevo pedido*
        
        Fecha: ${fecha}

        ━━━━━━━━━━━━━━

        - ${productos}

        ━━━━━━━━━━━━━━

        *TOTAL: $${total}*

        Gracias! Quedo a la espera de confirmación
        `;

        return encodeURIComponent(texto);
    };

          // Abrir WhatsApp
    const enviarWhatsApp = () => {

        const numero = "5491165282039"; // formato internacional sin + ni espacios
        const url = `https://wa.me/${numero}?text=${generarMensaje()}`;
        window.open(url, "_blank");

    };


    const handleSendOrder = () => {

        console.log(listOrder)
        enviarWhatsApp();

    }

    return (

        <>        
            {
                (isThereStock) 
                
                ? (

                    <button className="btn-order" onClick={ handleSendOrder}><span>Realizar Pedido</span><i></i></button>

                ) : (
                    
                    <button className="btn-order disabled" disabled><span>Realizar Pedido</span><i></i></button>
                )
            }
        </>
    )
}   