import React from "react"
import {Link} from "react-router-dom"
import ServicesData from "./ServicesData"

function ServicesList(){
    const services = ServicesData.map(service => (
        <h3 key={service._id}>
            <Link to={`/services/${service._id}`}> {service.name} </Link> -{service.price}
        </h3>
    ))
    return(
        <div>
            <h1> Services list page </h1>
            {services}
        </div>
    )
}

export default ServicesList