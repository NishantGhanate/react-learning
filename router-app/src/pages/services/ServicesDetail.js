import React from "react"
import {useParams} from "react-router-dom"
import ServicesData  from "./ServicesData"

function ServicesDetail(){
    const {serviceId} = useParams()
    console.log(serviceId)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const thisService = ServicesData.find(service => service._id === serviceId)

    return(
        <div>
            <h1> Service detail page</h1>
            {thisService.name} - {thisService.description}
        </div> 
    )
}

export default ServicesDetail