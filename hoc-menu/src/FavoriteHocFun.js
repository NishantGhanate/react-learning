import React  from "react"
import {withToggler} from "./hocs/withToggler"

function FavoriteHocFun(props){
    return(
        <div>
            <h3>Click on heart to favorite </h3>
            <h1>
                <span onClick={props.toggle}> 
                    {props.on ? "❤️" : "♡"}
                </span>
            </h1>
            <p>This is with Function based HOC </p>
        </div>
    )
}

export default withToggler(FavoriteHocFun,{defaultOnValue: true})


