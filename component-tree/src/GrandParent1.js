import React, {PureComponent} from "react"
import Parent from "./Parent"

class GrandParent extends PureComponent {   
    
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component extending PureComponent</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent