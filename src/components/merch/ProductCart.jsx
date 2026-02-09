import { useState } from "react";
import "../../styles/merch/ProductCart.css"



export default function ProductCart({id ,name, price, image, deleteProduct, plusPrice,lessPrice, changePrice }) {



    // Carga todas las imágenes de la carpeta correcta
    const images = import.meta.glob(`../../assets/merch/products/*`, {
        eager: true,
        import: "default"
    });
 

  // Filtra solo las imágenes del producto que estan en la carpeta y mapea todas las fotos de la carpeta
  const productImage = Object.entries(images)
    .filter(([key]) => key.includes(`/${image}`))
    .map(([, value]) => value.src);

    const initialStateProduct = {
        units: 1,
        subtotal: price
    }
    const [ product, setProduct ] = useState(initialStateProduct);


    // Boton Sumar
    const plusUnit = () => {
        setProduct(prev => ({
            ...prev,
            units: prev.units + 1,
            subtotal: prev.subtotal + price
        }));
    };


    //Boton restar
    const lessUnit = () => {
        setProduct(prev => {
            if (prev.units === 1) return prev; // no baja de 1

            return {
            ...prev,
            units: prev.units - 1,
            subtotal: prev.subtotal - price
            };
        });
    };



    const handleOnchange = (value) => {

       
        if(value == "") {
            setUnits(initialStateProduct)
        }else {
        const num = parseInt(value) || 1;
        setProduct(prev => {
            if (prev.units  < 1) return prev; // no baja de 1

            return {
            ...prev,
            units: num,
            subtotal: num * price
            };
        });



        }

    }

    const handleDeleteProduct = (id) => {
        deleteProduct(id)

    }


// const [debouncedSubtotal, setDebouncedSubtotal] = useState(product.subtotal);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setDebouncedSubtotal(product.subtotal);
//   }, 300);

//   return () => clearTimeout(timer);
// }, [debouncedSubtotal]);


    return(
        <div className="container-product-cart">
            <div className="box-left">
                <div className="box-img">
                    <img src={productImage} alt="" />
                </div>
                <div className="box-tittle">
                    <h5>{name}</h5>
                </div>
                <div className="box-plus-less">
                    <div className="plus-less">
                        <button onClick={()=>plusUnit(product.units)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                        </button>

                        <input className="input-count" type="number"  value={product.units} onChange={(e) =>handleOnchange(e.target.value)}/>
                        
                        <button onClick={()=>lessUnit(product.units)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l6 0" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="box-right">
                <div className="box-price">
                    <h5>{product.subtotal}</h5>
                </div>
                <div className="box-trash">

                    <button onClick={()=>{handleDeleteProduct(id)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    </button>

                </div> 
            </div>
        

        </div>
    )
}