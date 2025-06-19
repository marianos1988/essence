import { useState } from "react"

export default function openNavbar() {

    const [ open, setOpen ] = useState(false);

    const changeState = () => {
        setOpen(!open);
    }

    return(
        
        <>
            <button onClick={ ()=>{
                changeState();
                console.log(open)
            }}>Click Aqui</button>
        </>
    )
} 