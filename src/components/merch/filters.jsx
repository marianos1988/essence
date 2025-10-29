import { useState } from "react"
import "../../styles/merch/Filters.css"

export default function Filters() {


   const [stateToggle, setStateToggle] = useState(true);
    const toggleSidebar = () => {setStateToggle(!stateToggle)};
 

    return(
        <>  
            <section className={(stateToggle) ? "container-filters open" : "container-filters"}>
                <nav className="sidebar">
                    <div className="sidebar-inner">
                        <div className="sidebar-header">
                            <button type="button" className="sidebar-burger icon icon-tabler icons-tabler-outline icon-tabler-pinned" onClick={toggleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>
                            </button>
                            <h3>Filtrar
                            </h3>
                        </div>

                        <nav class="sidebar-menu">
                            <button type="button">
                                <i class='bx bx-home' ></i>
                                <span>Home</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-user' ></i>
                                <span>Accounts</span>
                            </button>
                            <button type="button" class="has-border">
                                <i class='bx bx-cog' ></i>
                                <span>Settings</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-shape-circle'></i>
                                <span>Blockchain</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-data' ></i>
                                <span>Databases</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-speaker' ></i>
                                <span>AudioVibe</span>
                            </button>
                            <button type="button" class="has-border">
                                <i class='bx bx-music' ></i>
                                <span>Soundblast</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-folder' ></i>
                                <span>Folders</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-layer' ></i>
                                <span>Levels</span>
                            </button>
                            <button type="button">
                                <i class='bx bx-lock' ></i>
                                <span>Security</span>
                            </button>
                        </nav>


                    </div>
                </nav>
            </section>

        </>
    )
}