import React,{Component} from 'react';
import './App.css';
import Hello from './components/Hello';
import Welcom from './components/Wellow';


export default class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <Welcom/>
      </div>
    )
  }
}
