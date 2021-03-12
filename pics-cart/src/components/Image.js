import React, { useState, useContext } from "react"
import {Context} from "../Context"
//TODO: add prop type 

function Image({className,img}){

    const [hovered,setHovered] = useState(false)
    const {toggleFavorite,addToCart,cartItems,removeFromCart} = useContext(Context)

    var heartClass = "ri-heart-line favorite"
    if (img.isFavorite){
        heartClass = "ri-heart-fill favorite"
    }

    const alreadyInCart = cartItems.some(item => item.id === img.id)
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    const heartIcon = hovered && 
        <i className={heartClass} onClick={() => toggleFavorite(img.id)}></i>
    // const cartIcon = hovered && 
    //     <i className={cartClass} onClick={() =>addToCart(img) }></i>
    
    return(
        <div className={`${className} image-container`} 
            onMouseEnter = {() => setHovered(true)}
            onMouseLeave = {() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon()}

        </div>
    )
}


// Image.propTypes = {
//     className: PropTypes.string,
//     img: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         isFavorite: PropTypes.bool
//     })
// }

export default Image