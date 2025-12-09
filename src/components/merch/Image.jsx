
//Importar imagenes si o si carpeta public
export default function Image({ id, img }) {
    console.log(`/products/${id}/${img}`)
    const path = `/products/${id}/${img}`;


// const images = import.meta.glob('../assets/products/*.{png,jpg,jpeg,webp}', {
//   eager: true
// });

// const id = '1.jpg';
// const imgSrc = images[`../assets/productos/${id}`].src;


// <img src={imgSrc} alt="Producto" />





    return(
        // <img src={`./products/${id}/${img}`} alt="" />
        <img src="/products/producto-1/img1.jpg" alt={id} />
    )
} 