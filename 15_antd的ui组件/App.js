import React, { Component } from 'react'
import {Button,Icon} from 'antd'
import {WechatOutlined} from '@ant-design/icons'
// import 'antd/dist/antd.css'
 
export default class App extends Component {
  render() {
    return (
      <div>App...
         <Button type='primary'>点我</Button>
         {/* <Icon type="wechat" /> */}
         <WechatOutlined/>
      </div>
    )
  }
}
