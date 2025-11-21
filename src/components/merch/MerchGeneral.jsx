
import Dropdown from "./Dropdown";
import Filters from "./Filters";
import "../../styles/merch/MerchGeneral.css";

export default function MerchGeneral( { categories }) {
    


  const options = [
    { label: "Mayor precio", value: "1" },
    { label: "Menor precio", value: "2" }

  ];

  const handleSelect = (option) => {
    console.log("Seleccionaste:", option);
  };

    return(
        <div className="container-merch">
            <h1>Merch</h1>
            <section className="sec-filters">
                <Filters
                    categories = {categories}
                />
            </section>
            <section className="sec-products">
                <Dropdown 
                    label="Ordenar por:" options={options} onSelect={handleSelect}
                />
            </section>
        </div>
    )
}