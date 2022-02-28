import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {


  state={nihao:false}
  handleMouse=(flag)=>{

    return()=>{
      this.setState({nihao:flag})
    }
  }


  
  render() {
    const{name,done}=this.props
    return (
      <div> 
        <li onMouseLeave={this.handleMouse(true)} onMouseEnter={this.handleMouse(false)}>
          <label>
            <input type="checkbox" defaultChecked={done}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{ display: 'none' }}>
            删除
          </button>
        </li></div>
    )
  }
}
