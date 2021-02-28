import React from "react"
import Card from "./Card"
import CardClass from "./CardClass"
import RoundImage from "./RoundImage"
import Banner from "./Banner"

function App(){
    return(
        <div>
            <Card cardColor='Purple' height={150} width={150}/>
            <CardClass cardColor='Maroon' height={150} width={150}/>
            <RoundImage src="https://picsum.photos/id/237/300/300" borderRadius="10px"/>
            <Banner headline="Data from props">
                <p>Some harcoded text </p>
            </Banner>
            <Banner >
                <RoundImage src="https://picsum.photos/id/237/300/300" borderRadius="10px"/>
                <figcaption>Just look at those innocent eyes !</figcaption>
            </Banner>
        </div>
    )
}

export default App;
