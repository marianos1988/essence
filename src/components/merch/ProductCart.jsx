import { useState } from "react";
import "../../styles/merch/ProductCart.css"


export default function ProductCart({name, price, image}) {



      // Carga todas las imágenes de la carpeta correcta
  const images = import.meta.glob(`../../assets/merch/products/*`, {
    eager: true,
    import: "default"
  });
 

  // Filtra solo las imágenes del producto que estan en la carpeta y mapea todas las fotos de la carpeta
  const productImage = Object.entries(images)
    .filter(([key]) => key.includes(`/${image}`))
    .map(([, value]) => value.src);

    const [units, setUnits] = useState(1);

    const plusUnits = (unit) => {
        const plusUnit = unit + 1;
        setUnits(plusUnit)
    } 

    const lessUnits = (unit) => {
        if(!(unit == 1)) {
            const lessUnits = unit - 1
            setUnits(lessUnits)
        }
        
    }

    const handleOnchange = (value ) => {

        const num = parseInt(value)
        if(value == "") {
            setUnits(1)
        }else {
        setUnits(num)
        }

    }

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
                        <button onClick={()=>plusUnits(units)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                        </button>

                        <input className="input-count" type="number"  value={units} onChange={(e) =>handleOnchange(e.target.value)}/>
                        
                        <button onClick={()=>lessUnits(units)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l6 0" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="box-right">
                <div className="box-price">
                    <h5>{price}</h5>
                </div>
                <div className="box-trash">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </div> 
            </div>
        

        </div>
    )
}