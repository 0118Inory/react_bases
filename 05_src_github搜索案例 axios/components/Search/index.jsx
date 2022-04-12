import React, { Component } from "react";
import axios from 'axios'

export default class search extends Component {
  
  search=()=>{
    // 获取用户的输入
    const{value}=this.keyWordElement
    // 发送请求通知app更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})
    console.log('value',value);
    // 发送网络的请求
    axios.get(`/api1/search/users?q=${value}`).then(
      response=>{
        // 请求成功后通知App更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error=>{
        // 请求失败后通知App更新状态
        this.props.updateAppState({isLoading:false,err:error.message})
      }
    )

  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input ref={c=>this.keyWordElement=c} type="text" placeholder="按下enter可显示你想要的用户 " />&nbsp;<button onClick={this.search} >搜索</button>
        </div>
      </section>
    );
  }
}
