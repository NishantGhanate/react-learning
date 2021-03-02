import React from "react"
import Toggle from "./Toggle"

function FavoriteToggle(props){
    return(
        <Toggle defaultOnValue={true} render={
            ({on,toggle}) => (
            <div>
                <h3>Click on heart to favorite </h3>
                <h1>
                    <span onClick={toggle}> 
                        {on ? "❤" : "♡"}
                    </span>
                </h1>
                <p>This is FavoriteToggle function which uses Toggle.js Component </p>
            </div>
            )
        }/>
    )
}

export default FavoriteToggle