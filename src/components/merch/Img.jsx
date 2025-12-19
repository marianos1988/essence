import { useState } from "react";
import "../../styles/merch/Img.css";

export default function Img({ path }) {


  // Carga todas las imágenes de la carpeta correcta
  const images = import.meta.glob(`../../assets/merch/products/*`, {
    eager: true,
    import: "default"
  });
 


  // Filtra solo las imágenes del producto que estan en la carpeta
  const productImages = Object.entries(images)
    .filter(([key]) => key.includes(`/${path}-`))
    .map(([, value]) => value.src);


  const [current, setCurrent] = useState(0);

  if (productImages.length === 0) {
    console.warn(`No hay imágenes para ${path}`);
    return null;
  }

  return (

      <div className="carousel">

        {/* Imagen */}
        <img
          src={productImages[current]}
          alt={`${path}-${current}`}
          className="carousel-img"
        />

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

