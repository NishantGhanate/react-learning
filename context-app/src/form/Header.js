import React from "react"
import {UserContextConsumer} from "./userContext"

function Header(props){
    return(
        <header>
            <UserContextConsumer>
                {({username}) => (
                    <p>Welcome, {username}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
