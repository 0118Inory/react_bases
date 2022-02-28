
// 样式模块化
import hello from './index.module.css'
import React,{Component} from'react'



export default class Hello extends Component{
    render(){
        return(
            <h2 className={hello.nihao}>Hello ,react</h2>
        )
    }
}