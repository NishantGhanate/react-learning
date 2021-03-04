import React from "react"
import PropTypes from "prop-types"

function Button(props){
    return(
        <button className={`${props.theme}-theme`}>
            {props.theme === "light" ? "Light" : "Dark"} Theme
        </button>
       
    )
}

Button.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
    theme: "light"
}


export default Button