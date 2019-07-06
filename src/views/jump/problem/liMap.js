import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class MapList extends Component {
  constructor(props){
    super(props)
    this.state = {
      types:["平台介绍","充值提现","我要投资","债权转让"]
    }
    //console.log(this.props.BorrowCount.aboutReducer)
  }
  render() {
    return (
      <ul>
        {
          this.props.commonList.map((item,index)=>{
            return {
              title: this.state.types[index],
              list: item.list
            }
          }).map((item,index)=>{
            return (
              <li key={index}>
                <p className='p1'>
                  <span className='s1'>{item.title}</span>
                  <NavLink to="/about">
                    <span className='s2'>查看更多 ></span>
                  </NavLink>
                 
                </p>
                <p className='p2'>{item.list[0].title}</p>     
                <p className='p2'>{item.list[1].title}</p> 
              </li> 
            )
          })
        }
    </ul>
    )
  }
}



export default MapList