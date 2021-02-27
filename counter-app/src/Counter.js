import React, {Component} from "react"

class Counter extends Component{
    state = {
        count : 0
    }

    // arrow functions run in same class context 
    increment = () => {
        this.setState(prevState =>{
            return{
                count : prevState.count + 1
            }
        })
    }

    decrement = () => {
        this.setState(prevState =>{
            return{
                count : prevState.count - 1
            }
        })
    }

    render(){
        const {count} = this.state
        //  alias name 
        const {count : number} = this.state
        return(
            <div>
                <h1>{count}</h1>
                <h1>{number}</h1>
                <button onClick={this.decrement} > - </button>
                <button onClick={this.increment} > + </button>
            </div>
        )
    }
}

export default Counter

