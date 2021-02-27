import React, {Component} from "react"

class CardClass extends Component{
    static defaultProps = {
        cardColor : 'grey',
        height : 100,
        width : 100
    }
    
    render(){
        const styles = {
            backgroundColor : this.props.cardColor,
            height : this.props.height,
            width : this.props.width,
        }

        return(
            <div style = {styles}></div>
        )
    }
}

export default CardClass