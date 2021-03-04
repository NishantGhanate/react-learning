import React from "react"
import PropTypes from "prop-types"


function Button1(props){
    console.log(props)
    const {theme , toggleTheme } = props.context
    return(
        <button onClick={toggleTheme} className={`${theme}-theme`}> {theme} Theme</button>
       
    )
}

Button1.propTypes = {
    theme: PropTypes.oneOf(["light", "dark"])
}

Button1.defaultProps = {
    theme: "light"
}


export default Button1