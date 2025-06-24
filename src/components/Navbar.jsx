
import { useState } from "react";
import "../styles/Navbar.css"

export default function Navbar() {

        const [open,setOpen] = useState(false);

        const handleSetOpen = () => {
        
            setOpen(!open)
        }
    
    return (

            <div className={(open) ? "container-navbar open" : "container-navbar"} >
                <button className="burger"  onClick={()=>handleSetOpen()}></button>
                <div className="background"></div>
                <div className="menu">
                    <nav>
                    <a id="inicio-nav">Quienes Somos</a>
                    <a href="/Events" id="eventos-nav">Eventos</a>
                    <a id="sets-nav">Sets</a>
                    <a id="roosters-nav">Rooster</a>
                    <a id="merch-nav">Merch</a>
                    <a id="works-nav">Trabaja con nosotros</a>
                    <a id="contacto-nav">Contacto</a>
                    </nav>
                </div>
            </div>
    )


}
