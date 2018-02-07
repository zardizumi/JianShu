import React from 'react'
import {NavLink} from 'react-router-dom'

class TopNav extends React.Component {
    render(){
        return (
            <div id='topnav'>
                <NavLink to='/'>首页</NavLink>
                <NavLink to='/one'>下载App</NavLink>
                <NavLink to='/two'>登陆</NavLink>
            </div>
        )
    }
}
export default TopNav