import React,{Component} from 'react';
import './App.css';
import Hello from './components/Hello';
import welcom from './components/Wellow';


export default class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <welcom/>
      </div>
    )
  }
}
