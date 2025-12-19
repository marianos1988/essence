import { useState, useRef } from "react";
import "../../styles/merch/ImgCarousel.css";

export default function ImgCarousel({ path, autoplay = true, delay = 3000 }) {



  // Carga todas las imágenes de la carpeta correcta
  const images = import.meta.glob(`../../assets/merch/products/*`, {
    eager: true,
    import: "default"
  });
 


  // Filtra solo las imágenes del producto que estan en la carpeta y mapea todas las fotos de la carpeta
  const productImages = Object.entries(images)
    .filter(([key]) => key.includes(`/${path}-`))
    .map(([, value]) => value.src);


  const [current, setCurrent] = useState(0);

  const startX = useRef(0);

  const total = productImages.length;

  if (!total) return null;


  if (productImages.length === 0) {
    console.warn(`No hay imágenes para ${path}`);
    return null;
  }


  // 📱 SWIPE MOBILE
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Imagen */}
        <div className="carousel-img-wrapper">
          <img
            key={current}
            src={productImages[current]}
            alt={`${path}-${current}`}
            className="carousel-img"
          />
        </div>


        {/* Dots */}
        <div className="carousel-dots">
          {productImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    );

}

