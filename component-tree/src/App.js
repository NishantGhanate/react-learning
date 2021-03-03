import React, {Component} from "react"
import GrandParent from "./GrandParent"
import GrandParent1 from "./GrandParent1"
import GrandParentFun from "./functional_components/GrandParentFun"

class App extends Component {
    state = { count: 0 }
    
    increment = () => this.setState(prevState => ({count: prevState.count + 1}))
    
    render() {
        console.log("[GP] [P] [C] [GC] APP just rendered")
        return (
            <div>
                <button onClick={this.increment}>+1</button>
                <h2>{this.state.count}</h2>
                <p>I'm the App component</p>

                <GrandParent count = {this.state.count} />
                <GrandParent />
                <br/>

                <GrandParent1 count={this.state.count}/>
                <br/>

                <GrandParentFun/>
            </div>
        )    
    }
}

export default App