import React, {Component} from "react"
import UserContext from "./userContext"


class Header extends Component{
    static contextType = UserContext

    render(){
        const username = this.context
        return(
            <header>
                <p>Hello There {username}</p>
            </header>
        )
    }
}

export default Header