import React from "react"


function MenuToggle(props){
    return(
        <div>
        <button onClick={props.toggle}> 
           {props.on ? "Show" : "Hide"} Menu
        </button>
        <nav style={{display : props.on ? "block" : "none"}}>
            <span>Using Toggle Component to logic & data to MenuToggle </span>
        </nav>
    </div>
    )
}

export default MenuToggle