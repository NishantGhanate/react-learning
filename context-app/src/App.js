import React, {Component} from "react"
import Header from "./Header"
import Button from "./Button"
import UserContext from "./userContext"

class App extends Component{
    static contextType = UserContext

    render(){
        const username = this.context
        return(
            <div>
                <Header/>
                <main>
                    <p> Hello  {username} from html main </p>
                </main>
                <Button/>
                <UserContext.Consumer>
                    {theme =>(
                        <Button theme={theme} />
                    )}
                </UserContext.Consumer>
                
            </div>
            
        )
    }
}

export default App;
