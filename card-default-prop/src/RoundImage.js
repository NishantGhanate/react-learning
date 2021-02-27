import React from "react"
import PropTypes from 'prop-types'


function RoundImage(props){
    return(
        <img 
            src={props.src} 
            alt="doggo"
            style={{borderRadius: props.borderRadius}} 
            className="round-img"
        />  
    )
}

RoundImage.propTypes = {
    src : PropTypes.string.isRequired
}

RoundImage.defaultProps = {
    borderRadius : "50px"
}

export default RoundImage