import React, { Component } from "react";
import MyNavLink from "../../components/MyNavLink";
import News from './News'
import Message from './Message'
import { Route, Routes } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
             
              <MyNavLink to="news">News</MyNavLink>
            </li>
            <li>
             
              <MyNavLink to="message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Routes>
            <Route path="/home/*" component={News}></Route>
            <Route path="/home/*" component={Message}></Route>
          </Routes>
      {/* <News/>
      <Message/> */}
        </div>
      </div>
    );
  }
}
