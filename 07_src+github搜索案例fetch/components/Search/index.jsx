import React, { Component } from "react";
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class search extends Component {
  
  search=async()=>{
    console.log('search 发布消息了');
    // PubSub.publish('atguigu',{name:'tom',age:18})

   // 获取用户的输入
    const{value}=this.keyWordElement
    // 发送请求通知app更新状态
    /*this.props.updateAppState({isFirst:false,isLoading:true})*/
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})
    
    console.log('value',value);
    // #region
    // // 发送网络的请求===使用axios发送
    // axios.get(`/api1/search/users2?q=${value}`).then(
    //   response=>{
    //     // 请求成功后通知App更新状态
    //     /*this.props.updateAppState({isLoading:false,users:response.data.items})*/
    // PubSub.publish('atguigu',{isLoading:false,users:response.data.items})

    //   },
    //   error=>{
    //     // 请求失败后通知App更新状态
    //     /*this.props.updateAppState({isLoading:false,err:error.message})*/
    // PubSub.publish('atguigu',{isLoading:false,err:error.message})

    //   }
    // )
    // #endregin

    // 使用fetch请求===使用fetch为优化
  //   fetch(`/api1/search/users2?q=${value}`).then(
  //     response=>{console.log('联系服务器成功了');
  //     // return response.json()  中的json()会反映出Promise实例对象
  //     return response.json()
  //   },
  //     error=>{console.log('联系服务器失败了',error);
  //   return new Promise(()=>{})
  // }
  //   ).then(
  //     response=>{console.log('获取数据成功了',response);},
  //     error=>{console.log('获取数据失败了',error);}
  //   )
    // 使用fetch请求===使用fetch为优化
     try{
      const response =await fetch(`/api1/search/users2?q=${value}`)
      const data =await response.json()
      PubSub.publish('atguigu',{isLoading:false,users:data.items})
      console.log(data);

     }catch(error){
       console.log('请求出错',error);
       PubSub.publish('atguigu',{isLoading:false,err:error.message})
     }

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
