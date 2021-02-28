import React from "react"

function Banner(props){
    return(
        <div className="banner">
            {props.headline}
            
            {props.children}
        </div>
    )
}

export default Banner