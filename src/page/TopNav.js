import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/topNav.css'
import Logo from '../images/logo.png'
class TopNav extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            logoSrc:'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
        }
    }
    render(){
        return (
            <div id='topnav'>
                <a href="https://www.jianshu.com/"  class='logo'>
                    <img src={Logo} style={{height:"100%"}} alt="123"/>
                </a>
                <NavLink to='/'>首页</NavLink>
                <NavLink to='/one'>下载App</NavLink>
                <NavLink to='/two'>登陆</NavLink>
            </div>
        )
    }
}
export default TopNav