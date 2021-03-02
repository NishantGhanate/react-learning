import React , {Component} from "react"
import {withToggler} from "./hocs/withToggler"

class FavoriteHoc extends Component{
   
    render(){
        return(
            <div>
                <h3>Click on heart to favorite </h3>
                <h1>
                    <span onClick={this.props.toggle}> 
                        {this.props.on ? "❤️" : "♡"}
                    </span>
                </h1>
                <p>This is Class based with HOC </p>
            </div>
        )
    }
}

export default withToggler(FavoriteHoc,{defaultOnValue: false})


