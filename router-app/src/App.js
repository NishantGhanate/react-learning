import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Profile from "./profile/Profile"

import ServicesList from "./pages/services/ServicesList"
import ServicesDetail from "./pages/services/ServicesDetail"

function App(){
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServicesDetail />
                </Route>
                <Route exact path="/contact" component={Contact}/>
                <Route path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </div>
    )
}

export default App