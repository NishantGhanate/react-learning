import React, {Component} from "react"
import Button1 from "./Button1"
import Header1 from "./Header1"
import {ThemeContextConsumer} from "./themeContext"

class App1 extends Component{
    render(){
        
        return(
            <div>
                <main>
                    <p> Hello  from html App1 </p>
                </main>
                <ThemeContextConsumer>
                    {context =>(
                        <Header1 context={context} />
                    )}
                </ThemeContextConsumer>

                <ThemeContextConsumer>
                    {context =>(
                        <Button1 context={context} />
                    )}
                </ThemeContextConsumer>
                
            </div>
            
        )
    }
}

export default App1;
