import React, { Component } from 'react'
import './index.scss'
import Nav from './Nav'
import { Route,Redirect } from 'react-router-dom'
import Hot from './Hot';
import Comming from './Comming';
export default class Home extends Component {


  render() {
    return (
      <div className = "container">
        {/* 导航 */}
        <Nav/>
        {/* 路由展示区域 */}
        {/* <Redirect from  = "/home" to = "/home/hot" exact/> */}
        <Route path = "/home/hot" component = { Hot } />
        <Route path = "/home/comming"  component = { Comming } />
      </div>
    )
  }
}
