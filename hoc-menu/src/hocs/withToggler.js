import React, {Component} from "react"

/* A higher order function takes compoent as parameter 
to add new features to it 

Naming convection starts from [ with ] prefix, inline export, nested function

*/


class Toggler extends Component{
    state = {
        on : this.props.defaultOnValue
    }
    
    toggle = () =>{
        this.setState(prevState => {
            return {
                on : !prevState.on
            }
        })
    }

    render(){
        const {component: C, defaultOnValue, ...props} = this.props
        return(
            <C on={this.state.on} toggle={this.toggle} {...this.props}/>
        )
    }
}

export function withToggler(component, optionsObj){
    // TODO: add some default value in optionsObj if key doesn't exists
    return function(props){
        return(
           <Toggler 
           component = {component} 
           defaultOnValue = {optionsObj.defaultOnValue}
           {...props}/>
        )
        
    }
}

