import "../../styles/merch/Card.css";
// import Product11 from "../../assets/merch/product-1-1.jpg";
import BtnAddCart from "./BtnAddCart";
import ImgCarousel from "./ImgCarousel"; 


export const Card = ({id, name, price, images, description, isThereStock, upToCart2 }) => {

const handleUpToCart = (upToCart) => {

upToCart2(upToCart)
}

  return (
    <>
      <div className="container-card">
        <div className="box-image">

          <ImgCarousel 
            path={id}
          />

        </div>
        <div className="desc-product">
          <h3>{name}</h3>
          <h4>${price}</h4>
          <BtnAddCart
            isThereStock={isThereStock}
            addToCart = {{
              id: id,
              name: name,
              description: description,
              price: price
            }}
            upToCart = { handleUpToCart }
    
          />
        </div>
      </div>
    </>
  );
};
