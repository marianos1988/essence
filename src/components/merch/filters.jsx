
import "../../styles/merch/Filters.css"

export default function Filters({ categories, handleOpenGrid, openGrid, handleSelectCategory }) {

    const listCategories = categories.sort();
    
    const checkCantCategories = (number) => { 

        if(number == 4) return "four";
        else if(number == 3) return "three";
        else if(number == 2) return "two";
        else if(number == 1) return "one";
    }

    const numberCategories = checkCantCategories(listCategories.length);




    const toggleSidebar = (  ) => {


        if(openGrid) {

            handleOpenGrid(false)

        } else {

            handleOpenGrid(true)
        }
        

    };

 
    return(
        <>  
            <div className={(openGrid) ? `container-filters ${numberCategories}-categories open` : `container-filters ${numberCategories}-categories`}>
                <nav className="sidebar">
                    <div className="sidebar-inner">

                        <div className="sidebar-header">
                            <button type="button" className="sidebar-burger icon icon-tabler icons-tabler-outline icon-tabler-pinned" onClick={toggleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>
                            </button>
                            <h3>Filtrar
                            </h3>
                        </div>

                        <nav className="sidebar-menu">

                            
                                <button type="button" onClick={ ()=> { handleSelectCategory("all") } }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
                                    <span>Mostrar todos</span>
                                </button>
                            {
                                listCategories.map((category, index) => (
                                    

                                    (category == "Abanicos") ? (

                                        <button type="button" key={index} onClick={ ()=> { handleSelectCategory(category) } } >                               
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" role="img" aria-labelledby="fanOutlineTitle" stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 18 A10 10 0 0 1 22 18" />
                                                <path d="M12 18 L3.34 13" />
                                                <path d="M12 18 L7 9.34" />
                                                <path d="M12 18 L12 8" />
                                                <path d="M12 18 L17 9.34" />
                                                <path d="M12 18 L20.66 13" />
                                                <path d="M12 18 L12 22" />
                                                <circle cx="12" cy="18" r="0.9" fill="black" stroke="none" />
                                            </svg>
                                            <span>{category}</span>
                                        </button>
                                    ) :
                                    (category === "Gorras") ? (

                                        <button type="button" key={index} onClick={ ()=> { handleSelectCategory(category) } }>                               
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 66 66" viewBox="0 0 66 66" id="cap" className="cap">
                                            <path d="M17.2,41c-5,0.8-11.1,1.7-16.2,1.4V37c0-11.8,7.8-21.8,18.4-24.9C15.2,18.1,15.8,30.7,17.2,41z"></path>
                                            <path d="M21.9,12.6c1.4-1.5,2.6-1.5,4.4-1.5c1.7,0,3.3,0.2,4.9,0.5c7.1,5,11.9,14.1,13.1,24.5c-7.4,0.8-16,2.9-24.9,4.5
                                                    C17.5,26.5,18.3,16.3,21.9,12.6z"></path>
                                            <path d="M46.6 35.9C45.6 27 42 19 36.7 13.4c8.5 3.9 14.5 12.4 14.9 22.4C49.9 35.7 48.3 35.7 46.6 35.9zM65 47.3c-7 0-15.8 7.4-27.5 7.6-7.1.2-14.7-5.4-21.4-11.4 13.4-2.2 27.7-6.2 36.2-5.4C56.3 41.6 61.2 44.4 65 47.3z"></path>
                                            </svg>
                                            <span>{category}</span>
                                        </button>
                                    ) :
                                    (category == "Remeras") ? (

                                        <button type="button" key={index} onClick={ ()=> { handleSelectCategory(category) } }>                               
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-shirt"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" /></svg>
                                            <span>{category}</span>
                                        </button>
                                    ) :
                                    (category == "Lentes") && (
                                        <button type="button" key={index} onClick={ ()=> { handleSelectCategory(category) } }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-sunglasses"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 3a1 1 0 1 1 0 2h-1.257l-2.4 8h5.657a1 1 0 0 1 1 1v1h2v-1a1 1 0 0 1 1 -1h5.656l-2.4 -8h-1.256a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2a1 1 0 0 1 .958 .713l3.01 10.036l.022 .112l.008 .08l.002 2.559a4.5 4.5 0 0 1 -8.972 .5h-2.056a4.5 4.5 0 0 1 -8.972 -.5v-2.518l.004 -.071l.014 -.103l.018 -.076l3.006 -10.02a1 1 0 0 1 .958 -.712z" /></svg>
                                            <span>{category}</span>
                                        </button>
                                    )

                                ))
                            } 
                        </nav>
                    </div>
                </nav>
            </div>

        </>
    )
}