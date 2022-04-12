import React, { Component } from "react";
import { Route, Routes , } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Hearder";
import MyNavLink from './components/MyNavLink'



// import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header/>
             
            </div>
          </div>
        </div>
        <>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}
                {/* 在React中靠路由链接实现切换组件 */}
                <MyNavLink  to="/about" >About</MyNavLink>
                <MyNavLink  to="/home" >Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                                    
                    <Routes>
                   
                    {/* 注册路由 */}
                    <Route   path="/about" element={<About/>} />
                    <Route  path="/home" element={<Home/>} />
                    {/* <Route path="/"element={<Navigate replace to="/home"/>}/> */}
                    {/* <Redirect to="/about"/> */}
                
                   
                  </Routes>
                  

                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}
