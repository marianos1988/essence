
import Dropdown from "./Dropdown";
import Filters from "./Filters";
import "../../styles/merch/MerchGeneral.css";
import { useState } from "react";

export default function MerchGeneral( { categories }) {
    
const stateOpenGrid = false;

 const [ openGrid, setOpenGrid ] = useState(stateOpenGrid);

 const handleOpenGrid = ( data ) => {
    setOpenGrid(data)
    console.log(openGrid)
 }

  const options = [
    { label: "Mayor precio", value: "1" },
    { label: "Menor precio", value: "2" }

  ];

  const handleSelect = (option) => {
    console.log("Seleccionaste:", option);
  };

    return(
        <div className="container-merch">
            <section className="sec-tittles">
                <h1>Merch</h1>

                <h3>Categoría / Gorros</h3>
            </section>
            
            <section className="sec-filters">
                <Filters
                    categories = {categories}
                    handleOpenGrid = { handleOpenGrid }
                />
            </section>
            
            <section className="sec-products">
                <div className="box-dropdown">
                    <Dropdown 
                        label="Ordenar por:" options={options} onSelect={handleSelect}
                    />
                </div>
                <h3>Prueba</h3>

            </section>
        </div>
    ) 
}