import React, {Component} from "react"


class Toggle extends Component{
    state = {
        on : this.props.defaultOnValue
    }

    static defaultProps = {
        defaultOnValue : false
    }

    toggle = () => {
        this.setState(prevState => {
            return{
                on : !prevState.on
            }
        })
    }

    render(){
        return(
            <div>
                {this.props.render(
                    {
                        on: this.state.on,
                        toggle: this.toggle
                    }
                )}
            </div>
        )
    }
}

export default Toggle