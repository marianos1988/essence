
import Dropdown from "./Dropdown";
import Filters from "./Filters";
import "../../styles/merch/MerchGeneral.css";
import { useState } from "react";
import { Card } from "./Card";
import BtnCart from "./BtnCart";
import ProductCart from "./ProductCart";



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
const [numBadge, setNumBadge] = useState(0);

const [ totalPrice, setTotalPrice ] = useState(0);


//Manejar totales de carrito de compras
const handleTotalPrice = (newPrice, lessPlus) => {

    if(lessPlus == "plus")
        setTotalPrice(totalPrice + newPrice)
    else if(lessPlus == "less") {
       setTotalPrice(totalPrice - newPrice)
    }
}


//MAnejar agregar producto al carrito
 const handleSetOrderList = (newOrder) => {

    let newListOrder = [];

    //Si no hay lista lo agrega el primer producto sin mapear
    if(ordersList.length < 1) {
        handleTotalPrice(newOrder.price,"plus");
        setOrderList([...ordersList, newOrder])
        setNumBadge(ordersList.length + 1)

    } else {
        ordersList.map(
            (order) => {
                if(order.id !== newOrder.id) { 
                    newListOrder.push(newOrder)
                    handleTotalPrice(newOrder.price,"plus");
                    setNumBadge(ordersList.length + 1)
                }
            }
        )

        const finalListOrder = ordersList.concat(newListOrder);
        setOrderList(finalListOrder)

    }
    
    // let newList = []
    // ordersList.map(
    //     (order) => {
    //         if(order.id !== orderDelete) {
    //             newList.push(order)
    //         }
    //     }
    // )

    // handleTotalPrice(order.price,"plus");
    // setOrderList([...ordersList, order])
    // setNumBadge(ordersList.length + 1)

 }

 const handleUpToCart = (order) => {
    handleSetOrderList(order)

 }

//Borrar producto del carrito
  const handleDeleteToCart = (orderDelete) => {
    let newList = []
    ordersList.map(
        (order) => {
            if(order.id !== orderDelete) {
                newList.push(order)
            }
        }
    )

    setOrderList(newList)
 }

 //Abrir y cerrar filtros
 const handleOpenGrid = ( data ) => {
    setOpenGrid(data)

 }

 //Abrir y cerrar Carrito de compras
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
                        ordersList = {numBadge}
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="box-tittles">
                    <h3>Producto</h3>
                    <h3 className="subtotal">Subtotal</h3>
                </div>

                <div className="list-cart">
                    {
                        ordersList.map(
                            (order) => (
                                <ProductCart
                                    key={order.id}
                                    id={order.id}
                                    name={order.name}
                                    price={order.price}
                                    image={`${order.id}-1`}
                                    deleteProduct={handleDeleteToCart}
                                    
                                />
                            )
                        )
                    }
                </div>

                <div className="box-total"> 
                    <h3>Total</h3>
                    <h3 className="total">{`$${totalPrice}`}</h3>
                </div>

            </section>
        </div>
    )  
}