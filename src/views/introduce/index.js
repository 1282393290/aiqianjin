import React, {Component} from 'react'
import Leftintroduce from './left-introduce'
import Rightintroduce from  './right-introduce'


import "@/styles/base.scss"
import "@/styles/introduce/index.scss"
import "@/styles/introduce/leftintroduce.scss"
import { Tabs } from 'antd'

const { TabPane } = Tabs

class Introduce extends Component {
  render () {
    return (
      <div className="harder">
        <div className="brands-banner">
          <img src="./imgs/banner.png" alt=""/>
        </div>
        <ul className="brands-tab">
          {/* <li><span>平台介绍</span></li>
          <li><span>信息披露</span></li> */}
          <Tabs defaultActiveKey="1"
        >
            <TabPane tab="平台介绍"


              key="1" >
            < Leftintroduce />
            </TabPane>
            <TabPane tab="信息披露"
             key="2"
             >
             <Rightintroduce/>

            </TabPane>
          </Tabs>,

        </ul>


        <div >


      {/* 平台介绍组件 */}
      {/* < Leftintroduce /> */}

      {/* 信息披露组件 */}
      {/* <Rightintroduce/> */}

        </div>

      </div>

    )
  }
}

export default Introduce
