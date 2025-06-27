import { useState } from "react"
import "../../styles/Events.css"




export default async function EventsR( events ) {

    console.log(events)
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

                            <div className={`item image-1`}>
                                <div className="content">
                                    <div className="name">Switzerland</div>
                                    <div className="description">Renowned for its breathtaking Alpine scenery and precision in craftsmanship</div>
                                    <button>See More</button>
                                </div>
                            </div>

                            <div className="item image-2">
                                <div className="content">
                                    <div className="name">Finland</div>
                                    <div className="description">Known for its saunas, lakes, and a deep connection to nature</div>
                                    <button>See More</button>
                                </div>
                            </div>

                            <div className="item image-3">
                                <div className="content">
                                    <div className="name">India</div>
                                    <div className="description">Famous for its rich culture, historical landmarks, natural beauty, and diverse cuisine</div>
                                    <button>See More</button>
                                </div>
                            </div>

                            <div className="item image-4">
                                <div className="content">
                                    <div className="name">Australia</div>
                                    <div className="description">Distinguished by its diverse ecosystems, ranging from beaches to bushland</div>
                                    <button>See More</button>
                                </div>
                            </div>

                            <div className="item image-5">
                                <div className="content">
                                    <div className="name">Netherland</div>
                                    <div className="description">Characterized by its iconic canals, tulip fields, and windmills</div>
                                    <button>See More</button>
                                </div>
                            </div>

                            <div className="item image-6">
                                <div className="content">
                                    <div className="name">Ireland</div>
                                    <div className="description">Known for its lush green landscapes and rich cultural heritage</div>
                                    <button>See More</button>
                                </div>
                            </div>
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