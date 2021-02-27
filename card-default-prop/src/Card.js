import React from "react"
import PropTypes from "prop-types"

function Card(props){
    
    const styles = {
        backgroundColor : props.cardColor,
        height : props.height,
        width : props.width,
    }

    return(
        <div style = {styles}></div>
    )
}

// validators 
Card.propTypes = {
    cardColor : PropTypes.string.isRequired,
    height : PropTypes.oneOf([170,150]).isRequired,
    width : PropTypes.number
}

Card.defaultProps = {
    height : 100,
    width : 100
}

export default Card