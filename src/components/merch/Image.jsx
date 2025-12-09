
//Importar imagenes si o si carpeta public
export default function Image({ id, img }) {
    console.log(`/products/${id}/${img}`)
    const path = `/products/${id}/${img}`;
    return(
        // <img src={`./products/${id}/${img}`} alt="" />
        <img src={path} alt={id} />
    )
} 