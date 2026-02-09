
import { useState } from "react";
import "../../styles/merch/Card.css";
import BtnAddCart from "./BtnAddCart";
import ImgCarousel from "./ImgCarousel"; 


export const Card = ({id, name, price, description, isThereStock, upToCart2, tilde }) => {

  const [ addTilde, setAddTilde ] = useState(tilde)

const handleUpToCart = (upToCart) => {

upToCart2(upToCart);

if(addTilde === false) setAddTilde(true)

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
          <div className="group-btns">
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
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={(addTilde === true) ? "icon icon-tabler icons-tabler-outline icon-tabler-checks checked" : "icon icon-tabler icons-tabler-outline icon-tabler-checks" }><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 12l5 5l10 -10" /><path d="M2 12l5 5m5 -5l5 -5" /></svg>
            </div> 
          </div>

        </div>
      </div>
    </>
  );
};
