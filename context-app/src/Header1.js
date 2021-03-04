import React from "react"



function Header1(props){
    const {theme } = props.context
    return(
        <header className={`${theme}-theme`}>
            <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
    )
}

export default Header1