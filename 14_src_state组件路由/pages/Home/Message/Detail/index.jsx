import React, { Component } from 'react'
// import qs from 'qs'
const DetailData=[
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，nihap '},
  {id:'03',content:'你好，Meistersinger'},
]

export default class Detail extends Component {
  render() {
    // 接收params参数
    // const{id,title}=this.props.match.params
    const findResult=DetailData.find((datailObj)=>{
      return datailObj.id===id
    })||{}
    // 接收search参数
    // const {search}=this.props.location

    // const {id,title}= qs.parse(search.slice(1))
    // console.log(result);
    // 接收state参数
    const{id,title}=this.props.location.this.state ||{}
    return (
      <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>ID:{findResult.content}</li>
      </ul>
    )
  }
}
