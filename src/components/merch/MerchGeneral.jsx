
import Dropdown from "./Dropdown";
import Filters from "./Filters";
import "../../styles/merch/MerchGeneral.css";
import { useState } from "react";
import { Card } from "./Card";
import BtnCart from "./BtnCart";



export default function MerchGeneral( { categories, products }) {

const stateOpenGrid = false;
const stateViewCart = false;
const stateProducts = products;
const stateNameCategory = "Productos";
 const [ openGrid, setOpenGrid ] = useState(stateOpenGrid);
 const [viewProducts, setViewProducts ] = useState(stateProducts);
 const [ nameCategory, setNameCategory ] = useState(stateNameCategory);
 const [viewCart, setViewCart] = useState(stateViewCart)

const stateOrdersList = []
 const [ ordersList, setOrderList ] = useState(stateOrdersList);

 const handleSetOrderList = (order) => {
    setOrderList([...ordersList, order])

 }

 const handleUpToCart = (order) => {
    handleSetOrderList(order)

 }

 const handleOpenGrid = ( data ) => {
    setOpenGrid(data)

 }

 const handleViewCart = () => {
    setViewCart(!viewCart)
 }

  const options = [
    { label: "Mayor precio", value: 1 },
    { label: "Menor precio", value: 2 },
    { label: "Ordenar A - Z", value: 3 },
    { label: "Ordenar Z - A", value: 4 }

  ];

  const selectOrder = (option) => {
    
    switch(option.value) {

        case 1: {

                    const sortedProducts = [...viewProducts].sort((a, b) => b.price - a.price)
                    setViewProducts(sortedProducts);
                    break;
        } 
        case 2: {


                    const sortedProducts = [...viewProducts].sort((a, b) => a.price - b.price)
                    setViewProducts(sortedProducts);
                    break;

        } 
        case 3: {

                    const sortedProducts = [...viewProducts].sort((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    setViewProducts(sortedProducts)
                    break;
        } 
        case 4: {

                    const sortedProducts = [...viewProducts].sort((a, b) =>
                        b.name.localeCompare(a.name)
                    );
                    setViewProducts(sortedProducts)
                    break;
        } 
    }


  };

  const selectCategory = ( category ) => {

        if(category === "all") {

                return (
                    setViewProducts(stateProducts),
                    setNameCategory(stateNameCategory)
                )
                    
                

        } else {
            let newViewProducts = [];

            stateProducts.map(
                (product) => {
                    if(product.category === category) {
                        newViewProducts.push(product)
                    }

                }
            )
            setViewProducts(newViewProducts)
            setNameCategory(category)

        }
  }

    return(
        <div className={(openGrid) ? `container-merch active` : `container-merch`}>
            <section className="sec-tittles">
                <h1>Merch</h1>

                <h3> {`Categoría / ${nameCategory}`} </h3>
            </section>
            
            <section className="sec-filters">
                <Filters
                    categories = {categories}
                    handleOpenGrid = { handleOpenGrid }
                    openGrid={ openGrid }
                    handleSelectCategory={ (c)=> selectCategory(c) }
                />
            </section>
            
            <section className="sec-products">
                <div className="box-dropdown">
                    <Dropdown 
                        label="Ordenar por:" options={options} onSelect={ selectOrder }
                    />
                    <BtnCart 
                        ordersList = {ordersList}
                        handleViewCart = {() => handleViewCart()}
                    />
                </div>
                <div className="list-products" key={viewProducts.map(p => p.id).join("-")}>

                    {
                        viewProducts.map(
                            (product) => (
                                <Card 
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    images={product.images}
                                    description={product.description}
                                    isThereStock={true} 
                                    upToCart2={ handleUpToCart }
                                />
                            )
                        )
                    }
                </div>
            </section>

            <section className={(viewCart) ? `sec-cart active` : `sec-cart`}>
                <div className="box-close">
                    <button onClick={()=>handleViewCart()} className="btn-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>

                </div>

            </section>
        </div>
    ) 
}