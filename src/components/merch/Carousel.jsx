import "../../styles/merch/Carousel.css"

export default function Carousel({path,images}) {


                Object.entries(images).map(([key, value]) => {

                })
            


            const cantidad = Object.keys(images).length;
            console.log(path)
    return (

    
            
            <div class="carousel">
                {
                    Object.values(images).map(
                        (image,index = index+1) => (
                                        <div class="carousel-controls">

                                            <input id="1" type="radio" name="controls" checked />
                                            <input id="2" type="radio" name="controls" />
                                            <input id="3" type="radio" name="controls" />
                                            <div class="dots">
                                                <label for="1"></label>
                                                <label for="2"></label>
                                                <label for="3"></label>
                                            </div>
                                            <div class="carousel-images">
                                                <img src="1.jpg" />
                                                <img src="2.jpg" />
                                                <img src="3.jpg" />
                                            </div>
                                        </div>
                        )
                    )
                }

            </div>
            
    )
}



