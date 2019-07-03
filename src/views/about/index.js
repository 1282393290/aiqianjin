import React, { Component } from 'react'
import '@/styles/about/index.scss'
import Bizcharts from './bizcharts.js'
import Message from './message.js'
import  Trigger from './trigger.js'
import { NavLink} from 'react-router-dom'
class About extends Component {
  componentDidMount(){
    fetch("borrowerInfo/borrowerCountLP?_=1562158919524")
    .then(response=>response.json())
    .then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div className='ui-page'>
        <div className="top-banner">
          <img src="//images.iqianjin.com/mimages/mobile/about/disclosure/banner.png" alt="" />
        </div>
        <div className="wrap-bg">
          <div className='data-box1'>
            <div className="data-box1-item01">爱钱进平台已经上线</div>
            <div className="data-box1-item02">1883天</div>
          </div>
          <ul className="data-box2">
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="wrap-bg invest-wrap">
          <h2>(截至2019-05-31)</h2>
          <ul className="data-box2">
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
            <li>
              <i>a</i>
              <div className="cont-txt">
                <span className="money">1,931.71亿元</span>
                <span className="add">累计撮合交易额</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="wrap-bg invest-wrap">
          <p className="turnover">成交金额</p>
          <Bizcharts />
        </div>
        <div className="wrap-bg">
          <div className='data-box1'>
            <div className="data-box1-item01">出借人提现订单总数</div>
            <div className="data-box1-item02">9,251,244笔</div>
          </div>
          <Message />
          < Trigger />
        </div>
        <div  className="wrap-bg message">
            <Message />
            <Message />
            <Message />
        </div>
        <div className="link-area">
          <NavLink>
              <img src="//images.iqianjin.com/mimages/mobile/about/disclosure/nianbao.jpg" alt=""/>
          </NavLink>
        </div>


      </div>
    )
  }
}

export default About
