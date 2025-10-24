import "../../styles/index/Carousel.css"
import React, { useRef } from "react";

export default function Carousel() {

    const sliderRef = useRef(null);

    const handleClick = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll(".item");
    if (direction === "next") {
      slider.append(items[0]);
    } else if (direction === "prev") {
      slider.prepend(items[items.length - 1]);
    }
  };

    return (
        <>
            <div className="container-carousel carousel-active">
                <article className="box-images">
                    <ul className='slider' ref={sliderRef}>
                        <li className="empty"></li>
                        <li className='item item-1'>
                            <div className='content'>
                                <h2 className='title'>"Proximos Eventos"</h2>
                                <p className='description'>
                                Descubrí donde vas a poder disfrutar de nuestra música y energía... 
                                </p>
                            </div>
                        </li>
                        <li className='item item-2'>
                            <div className='content'>
                                <h2 className='title'>"Sets"</h2>
                                <p className='description'>
                                Mirá nuestros sets alrededor de Buenos Aires y Argentina.
                                </p>
                            </div>
                        </li>
                        <li className='item item-3'>
                            <div className='content'>
                                <h2 className='title'>"Roster"</h2>
                                <p className='description'>
                                Conoce nuestros DJs y sus distintos géneros musicales.
                                </p>
                            </div>
                        </li>
                        <li className='item item-4'>
                            <div className='content'>
                                <h2 className='title'>"Merch"</h2>
                                <p className='description'>
                                No te quedes sin el merchadasing oficial de ESSENCE CREW.
                                </p>
                            </div>
                        </li>
                        <li className='item item-5'>
                            <div className='content'>
                                <h2 className='title'>"Community"</h2>
                                <p className='description'>
                                Unite a nuestra comunidad y disfrutá de todos los beneficios que tenemos para vos.
                                </p>
                            </div>
                        </li>
                        <li className='item item-6'>
                            <div className='content'>
                                <h2 className='title'>"Contacto"</h2>
                                <p className='description'>
                                Contactate con nosotros para sumarte a nuestro staff, realizar bookings, organizar eventos, festejos de cumpleaños y mucho más.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <nav className='nav'>

                            <svg  xmlns="http://www.w3.org/2000/svg" onClick={()=> handleClick("prev")} className="btn prev icon icon-tabler icons-tabler-filled icon-tabler-arrow-big-left" width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" /></svg>


                            <svg onClick={()=> handleClick("next")} className="btn next icon icon-tabler icons-tabler-filled icon-tabler-arrow-big-right" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" /></svg>  
                    </nav>
                </article>
            </div>
        </>
    )
}