import { useState } from "react"
import "../../styles/Events.css"



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

    
    

    const next = (dataEvents) => {
        
        let listDataEvents = dataEvents;
        const delFirstEvent = listDataEvents.shift();
        listDataEvents.push(delFirstEvent)

        setDataEvents(listDataEvents);
        console.log(listDataEvents)
    }


    const previus = () => {
        if(numImg < 1) {
            setNumImg(6)
        } else {
            setNumImg(numImg-1)
            if(numImg < 1) {
                setNumImg(6)
            }
        }

    }

    return(
        <>  
            <div className="container-events">
                <div className="container">
                    <div className="slide">

                        {
                            dataEvents.map( (event) => (
                                <div key={event.id} className={`item ${event.slug}`}>
                                    <div className="content">
                                        <div className="name">{event.data.titulo}</div>
                                        <div className="description">{event.description}</div>
                                        <button>Leer Mas</button>
                                    </div>
                                </div>
                            ))

                            
                        }

                    </div>

                    <div className="button">
                        <button className="prev" onClick={previus}><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="next" onClick={()=>next(dataEvents)}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </>

    )
}