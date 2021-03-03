import React from "react"
import GrandChildFun from "./GrandChildFun"

function ChildFun() {
    console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
    return (
        <div>
            <p>I'm a Child Function Component</p>
            <GrandChildFun />
            <GrandChildFun />
        </div>
    )
}

export default ChildFun