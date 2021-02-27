import React from "react"
import Card from "./Card"
import CardClass from "./CardClass"
import RoundImage from "./RoundImage"

function App(){
    return(
        <div>
            <Card cardColor='Purple' height={150} width={150}/>
            <CardClass cardColor='Maroon' height={150} width={150}/>
            <RoundImage src="https://picsum.photos/id/237/300/300" borderRadius="10px"/>
        </div>
    )
}

export default App;
