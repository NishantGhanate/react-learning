import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import MenuHoc from "./MenuHoc"
import FavoriteHoc from "./FavoriteHoc"
import FavoriteHocFun from "./FavoriteHocFun"
import FavoriteToggle from "./FavoriteToggle"
import MenuToggle from "./MenuToggle"
import Toggle from "./Toggle"

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
            <hr/>
            <FavoriteToggle/>
            <hr/>
            {/* <Toggle defaultOnValue={true}>
                {
                    ({on,toggle}) => {
                        return(
                            <MenuToggle on={on} toggle={toggle}/>
                        )
                    }
                }
            </Toggle> */}
        </div>
    )
}

export default App;
