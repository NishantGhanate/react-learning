import React from "react"
import {Link, Switch, Route, useRouteMatch} from "react-router-dom"
import Info from "./Info"
import Settings from "./Settings"

function Profile() {
    const {path, url} = useRouteMatch()

    return(
        <div>
            <h1>Profile page</h1>
            <br/>
            <ul>
                <li> <Link to={`${url}/info`}> Info </Link>  </li>
                <li> <Link to={`${url}/settings`}> Settings </Link>  </li>
            </ul>
            <Switch>
                <Route path={`${path}/info`}>
                    <Info/>
                </Route>
                <Route path={`${path}/settings`}>
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile