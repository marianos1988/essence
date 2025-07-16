import { useState } from "react"
import "../../styles/events/Events.css"
import BtnBuy from "../../components/events/BtnBuy";
import BtnInfo from "../../components/events/BtnInfo";




export default function EventsR( data ) {

    const { events } = data;



    const getEvents = (allEvents) => {

        let numEvents = allEvents.length;
        let arrEvents = [];
        
        
        allEvents.forEach(element => {


            let dataEvent = {
                id: parseInt(element.slug[7]),
                slug: element.slug,
                data: element.data,
                description: element.body 
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
            <div className="container-events">
                <div className="container">
                    <div className="slide">

                        {
                            dataEvents.map( (event) => (
                                
                                <div key={event.id} className={`item ${event.slug}`} style={{ backgroundImage: `url(/events/${event.data.img})` }}>

                                        <div className="content">
                                        <div className="name">{event.data.titulo}</div>
                                        <div className="site">{event.data.lugar}</div>
                                        <div className="date">{event.data.fecha}</div>
                                        <div className="description">{event.description}</div>
                                        <div className="group-btns">
                                            <a href={`${event.data.link_comprar}`} target="_blank">
                                                <BtnBuy>Comprar Ticket</BtnBuy>
                                            </a>
                                            <a href="">
                                                <BtnInfo />
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
                </div>
            </div>
        </>

    )
}