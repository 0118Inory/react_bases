import React, { Component } from 'react'
import './index.css'
import Item from '../Item'

export default class List extends Component {
  render() {
    const {todos}=this.props
    return (
      <ul className="todo-main">
    <Item/>
    </ul>
    )
  }
}