import React from "react"
import ChildFun from "./ChildFun"

function ParentFun() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a Parent Function Component</p>
            <ChildFun />
            <ChildFun />
        </div>
    )
}

export default ParentFun