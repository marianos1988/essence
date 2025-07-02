import { useState } from "react"
import "../../styles/Events.css"




export default async function EventsR( data ) {

    const { events } = data;

    const getEvents = (allEvents) => {

        let numEvents = allEvents.length;
        let arrEvents = [];

        
        allEvents.forEach(element => {

            let dataEvent = {
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

    const dataEvents = getEvents(events)



    const [numImg, setNumImg] = useState(1);




    const next = () => {
        if(numImg > 6) {
            setNumImg(1)
        } else {
            setNumImg(numImg+1)
            if(numImg > 6) {
                setNumImg(1)
            }
        }
        console.log(numImg)
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
        console.log(numImg)
    }

    return(
        <>  
            <div className="container-events">
                <div className="container">
                    <div className="slide">

                        {
                            dataEvents.arrEvents.map( (event) => (
                                <div key={event.slug} className={`item ${event.slug}`}>
                                    <div className="content">
                                        <div className="name">{event.titulo}</div>
                                        <div className="description">{event.description}</div>
                                        <button>Leer Mas</button>
                                    </div>
                                </div>
                            ))

                            
                        }

                    </div>

                    <div className="button">
                        <button className="prev" onClick={previus}><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="next" onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </>

    )
}