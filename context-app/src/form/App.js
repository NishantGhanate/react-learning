import React from "react"
import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App extends React.Component{

    state = {
        username : ""
    }
    
    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <UserContextConsumer>
                    {({username,changeUsername}) => (
                        <main>
                            <p className="main">No new notifications, {username}! 🎉</p>

                            <input
                                type="text"
                                name="username"
                                placeholder="New username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <button onClick={() => changeUsername(this.state.username)}>
                                Chnage username
                            </button>
                        </main>
                    )}
                </UserContextConsumer>
            </div> 
        )
    }
}

export default App