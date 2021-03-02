import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import MenuHoc from "./MenuHoc"
import FavoriteHoc from "./FavoriteHoc"
import FavoriteHocFun from "./FavoriteHocFun"

function App() {
    return(
        <div>
            <Menu/>
            <Favorite/>
            <hr/>
            <MenuHoc/>
            <FavoriteHoc/>
            <hr/>
            <FavoriteHocFun/>
        </div>
    )
}

export default App;
