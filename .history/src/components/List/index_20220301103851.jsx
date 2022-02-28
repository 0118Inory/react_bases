import React, { Component } from 'react'
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
