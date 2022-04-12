import React, { Component } from 'react'
import {Link ,Route}from'react-router-dom'
import Detail from './Detail/index'


export default class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'信息'},
            {id:'02',title:'信息2'},
            {id:'03',title:'信息3'}
        ]
    }
  render() {
  const {messageArr}=this.state
    return (
        <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Route path='/home/message/detail/:id/:title' component={Detail}/>
        {/* <Detail/> */}
      </div>
    )
  }
}
