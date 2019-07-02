import React, { Component } from 'react';
import { Tabs } from 'antd';
import Sector from './sector.js';

 const { TabPane } = Tabs;
class Trigger extends Component {

  render() {
    return (
      <Tabs defaultActiveKey="1" >
        <TabPane tab="出借金额分布" key="1">
         <Sector />
        </TabPane>
        <TabPane tab="出借人年龄分布" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="出借人性别分布" key="3">
          Content of Tab Pane 3
         </TabPane>
      </Tabs>
    )
  }
}
export default Trigger

// import { Tabs } from 'antd';

// const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

// ReactDOM.render(
//   <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="Tab 1" key="1">
//       Content of Tab Pane 1
//     </TabPane>
//     <TabPane tab="Tab 2" key="2">
//       Content of Tab Pane 2
//     </TabPane>
//     <TabPane tab="Tab 3" key="3">
//       Content of Tab Pane 3
//     </TabPane>
//   </Tabs>,
//   mountNode,
// );
{/* <ul className="chart02-switch tab">
        <li className="tab-item">出借金额分布</li>
        <li className="tab-item">出借人年龄分布</li>
        <li className="tab-item">出借人性别分布</li>
      </ul> */}