import React, { Component } from 'react'
import './index.css'
import Item from '../List'

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
    <Item/>
    </ul>
    )
  }
}
