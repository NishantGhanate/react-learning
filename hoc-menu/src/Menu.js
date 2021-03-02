import React , {Component} from "react"

class Menu extends Component{
    state = {
        show : false
    }

    toggleShow = () =>{
        this.setState(prevState => {
            return{
                show : !prevState.show
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.toggleShow}> 
                   {this.state.show ? "Show" : "Hide"} Menu
                </button>
                <nav style={{display : this.state.show ? "block" : "none"}}>
                    <h6>Signed as somevar</h6>
                    <span>profile : </span>
                   
                </nav>
            </div>
        )
    }
}

export default Menu