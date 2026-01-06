import "../../styles/merch/ProductCart.css"

export default function ProductCart(name, price, image) {

      // Carga todas las imágenes de la carpeta correcta
  const images = import.meta.glob(`../../assets/merch/products/*`, {
    eager: true,
    import: "default"
  });
 

  // Filtra solo las imágenes del producto que estan en la carpeta y mapea todas las fotos de la carpeta
  const productImage = Object.entries(images)
    .filter(([key]) => key.includes(`/producto-4-1`))
    .map(([, value]) => value.src);



    return(
        <div className="container-product-cart">
            <div className="box-left">
                <div className="box-img">
                    <img src={productImage} alt="" />
                </div>
                <div className="box-tittle">
                    <h5>Remera essence</h5>
                </div>
            </div>
            <div className="box-right">
                <div className="box-price">
                    <h5>3000</h5>
                </div>
            </div>

        </div>
    )
}