

export default function Img({ image,path }) {

  // Carga todas las imágenes de la carpeta correcta
  const images = import.meta.glob(`../../assets/merch/products/*`, {
    eager: true,
    import: "default"
  });


  //Seleccionar imagen correcta (Verificar nombre exacto del archivo!!!)
  const img = images[`../../assets/merch/products/${path}-${image}`];

  //Verifica que si hay foto
    if (!img) {
      console.warn(`Imagen no encontrada del producto ${path}: ${image}`);
      return null;
    }

  return (
    <img 
      src={img.src} 
      alt={image} 

    />
  );
}

