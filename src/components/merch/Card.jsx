import "../../styles/merch/Card.css";
import Product11 from "../../assets/merch/product-1-1.jpg";
import BtnAddCart from "./BtnAddCart";

export const Card = ({ name, price, img, isThereStock }) => {

  return (
    <>
      <div className="container-card">
        <div className="box-image">
          <img src={Product11.src} alt="" />
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
