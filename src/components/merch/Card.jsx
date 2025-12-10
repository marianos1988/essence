import "../../styles/merch/Card.css";
// import Product11 from "../../assets/merch/product-1-1.jpg";
import BtnAddCart from "./BtnAddCart";
import Img from "./Img";

export const Card = ({id, name, price, img1, img2, description, isThereStock }) => {

  return (
    <>
      <div className="container-card">
        <div className="box-image">
          {/* <img src={Product11.src} alt="" /> */}
          <Img 
            path={id}
            image={img1}
          />
        </div>
        <div className="desc-product">
          <h3>{name}</h3>
          <h4>${price}</h4>
          <BtnAddCart
            isThereStock={isThereStock}
          />
        </div>
      </div>
    </>
  );
};
