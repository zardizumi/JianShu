import React from 'react'
import {NavLink} from 'react-router-dom'
import $ from 'jquery'
import '../css/topNav.css'
import '../../node_modules/modern-normalize/modern-normalize.css'
import '../css/font-awesome.min.css'
import Logo from '../images/logo.png'

import _data from '../data/d.json'
class TopNav extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
        }
       this.inputFocus = this.inputFocus.bind(this);
       this.inputBlur = this.inputBlur.bind(this);
    }
    componentDidMount(){
        console.log(_data);
    }
    inputFocus(){
        $('.topNav_input').animate({width:"200px"},400)
    }
    inputBlur(){
        $('.topNav_input').animate({width:"130px"},400);
        console.log(this);
    }
    render(){
        return (
            <div id='topnav'>
                <a href="https://www.jianshu.com/"  className='logo'>
                    <img src={Logo} style={{height:"100%"}} alt="123"/>
                </a>
                <NavLink to='/' className='link link_active'>首页</NavLink>
                <NavLink to='/one' className='link'>下载App</NavLink>
                <div className='topNav_input'>
                    <input type="text" placeholder='搜索' onClick={this.inputFocus} onBlur={this.inputBlur}/>
                    <i className="fa fa-search " onClick={this.click}></i>
                </div>
                <NavLink to='/two' className='link' style={{float:"right"}}>登陆</NavLink>
                
            </div>
        )
    }
}
export default TopNav