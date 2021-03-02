import React , {Component} from "react"


class Favorite extends Component{
    state = {
        isFavorited : false
    }

    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited : !prevState.isFavorited
            }
        })
    }

    render(){
        return(
            <div>
                <h3>Click on heart to favorite </h3>
                <h1>
                    <span onClick={this.toggleFavorite}> 
                        {this.state.isFavorited ? "❤️" : "♡"}
                    </span>
                </h1>
                <p>This is normal component with no HOC </p>
            </div>
        )
    }
}

export default Favorite

