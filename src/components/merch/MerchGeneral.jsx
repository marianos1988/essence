
import Dropdown from "./Dropdown";
import Filters from "./Filters";
import "../../styles/merch/MerchGeneral.css";
import { useState } from "react";
import { Card } from "./Card";



export default function MerchGeneral( { categories }) {
    
const stateOpenGrid = false;

 const [ openGrid, setOpenGrid ] = useState(stateOpenGrid);

 const handleOpenGrid = ( data ) => {
    setOpenGrid(data)

 }

  const options = [
    { label: "Mayor precio", value: "1" },
    { label: "Menor precio", value: "2" }

  ];

  const handleSelect = (option) => {
    console.log("Seleccionaste:", option);
  };

    return(
        <div className={(openGrid) ? `container-merch active` : `container-merch`}>
            <section className="sec-tittles">
                <h1>Merch</h1>

                <h3>Categoría / Gorros</h3>
            </section>
            
            <section className="sec-filters">
                <Filters
                    categories = {categories}
                    handleOpenGrid = { handleOpenGrid }
                    openGrid={ openGrid }
                />
            </section>
            
            <section className="sec-products">
                <div className="box-dropdown">
                    <Dropdown 
                        label="Ordenar por:" options={options} onSelect={ handleSelect }
                    />
                </div>
                <div className="list-products">
                    <Card 
                        name={"Abanico Essence"}
                        price={15000}
                        isThereStock={true}
                    />
                    <Card 
                        name={"Gorra Essence"}
                        price={15000}
                        isThereStock={true}
                    />
                </div>


            </section>
        </div>
    ) 
}