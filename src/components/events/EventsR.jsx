import { useState } from "react"
import "../../styles/events/Events.css"
import BtnBuy from "./BtnBuy";
import BtnInfo from "./BtnInfo";


import Evento1 from "../../assets/Events/PreEvents/evento-1.png"
import Evento2 from "../../assets/Events/PreEvents/evento-2.png"
import Evento3 from "../../assets/Events/PreEvents/evento-3.png"
import Evento4 from "../../assets/Events/PreEvents/evento-4.png"
import Evento5 from "../../assets/Events/PreEvents/evento-5.png"
import Evento6 from "../../assets/Events/PreEvents/evento-6.png"
// import Evento7 from "../../assets/Events/PreEvents/evento-7.png"
// import Evento8 from "../../assets/Events/PreEvents/evento-8.png"
// import Evento9 from "../../assets/Events/PreEvents/evento-9.png"
// import Evento10 from "../../assets/Events/PreEvents/evento-10.png"




export default function EventsR( data ) {

    const { events } = data;


        const selectIMG = (id) =>{

            switch(id) {
                case 1: 
                    return Evento1.src;

                case 2: 
                    return Evento2.src;

                case 3: 
                    return Evento3.src;

                case 4: 
                    return Evento4.src;

                case 5: 
                    return Evento5.src;

                case 6: 
                    return Evento6.src;

                case 7: 
                    return Evento7.src;

                case 8: 
                    return Evento8.src;

                case 9: 
                    return Evento9.src;

                case 10: 
                    return Evento10.src;

            }

        }

    const getEvents = (allEvents) => {

        let numEvents = allEvents.length;
        let arrEvents = [];

        
        
        allEvents.forEach(element => {


            let dataEvent = {
                id: parseInt(element.slug[7]),
                slug: element.slug,
                data: element.data,
                description: element.body,
                img: selectIMG(parseInt(element.slug[7]))
                 
            }
            arrEvents.push(dataEvent);
        });

        return {
            numEvents,
            arrEvents
        }
    } 

    const allData = getEvents(events)
    const { numEvents } = allData; // Total de eventos
    

    const [ dataEvents, setDataEvents ] = useState(allData.arrEvents);
    

    const handleNext = () => {
        setDataEvents((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
        });
    };

    const handlePrev = () => {
        setDataEvents((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
        });
    };
    


    return(
        <>  
            <main className="container-events">
                <section className="container">
                    <div className="slide">

                        {
                            dataEvents.map( (event) => (
                                
                                
                                <div key={event.id} className={`item ${event.slug}`} style={{ 
                                    backgroundImage: `url(${selectIMG(event.id)})`,
                                    backgroundPositionY: `0`,
                                    backgroundSize: "contain",
                                    
                                    }}>

                                        <div className="content"> 
                                            <div className="group-btns">

                                                <a href={`/info-eventos/${event.slug}`}>
                                                    <BtnInfo />
                                                </a>
                                                <a href={`${event.data.link_comprar}`} target="_blank">
                                                    <BtnBuy>Comprar</BtnBuy>
                                                </a>
                                            </div>
                                        </div>
                                </div>


                            ))

                        }

                    </div>

                    <div className="button">
                        <button className="prev" onClick={()=>handlePrev(dataEvents)}><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="next" onClick={()=>handleNext(dataEvents)}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </section>
            </main>
        </>

    )
}