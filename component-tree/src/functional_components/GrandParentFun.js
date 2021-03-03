import React from "react"
import ParentFun from "./ParentFun"

function GrandParentFun(props) {    
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Function Component</p>
            <ParentFun />
            <ParentFun />
        </div>
    )
}

export default React.memo(GrandParentFun)