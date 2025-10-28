import { useState } from "react"
import "../../styles/merch/Filters.css"

export default function Filters() {


   const [stateToggle, setStateToggle] = useState(true);
    const toggleSidebar = () => {setStateToggle(!stateToggle)};
 

    return(
        <>  
            <section className={(stateToggle) ? "container-filters open" : "container-filters"}>
                <nav class="sidebar">
                    <div class="sidebar-inner">
                        <header class="sidebar-header">
                            <button type="button" class="sidebar-burger" onClick={toggleSidebar}>
                                <i class='bx bx-menu'></i>
                            </button>
                            <img src="logo.png" alt="" class="sidebar-logo" />
                        </header>

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