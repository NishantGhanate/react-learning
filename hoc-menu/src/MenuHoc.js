import React , {Component} from "react"
import {withToggler} from "./hocs/withToggler"

class MenuHoc extends Component{
    
    render(){
        console.log(this.props)
        return(    
            <div>
                <button onClick={this.props.toggle}> 
                   {this.props.on ? "Show" : "Hide"} Menu
                </button>
                <nav style={{display : this.props.on ? "block" : "none"}}>
                    <h6>Menu with HOC </h6>
                    <span>{this.props.on}</span>
                </nav>
            </div>   
        ) 
    }
}

export default withToggler(MenuHoc,{defaultOnValue: true})


// const SuperchargedFavoriteComponent = withToggler(MenuHoc)
// export default SuperchargedFavoriteComponent
