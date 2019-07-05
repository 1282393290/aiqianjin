import React,{Component} from 'react'
import '@/styles/about/index.scss'
import Bizcharts from './bizcharts.js'
import Message from './message.js'
import  Trigger from './trigger.js'
import { NavLink} from 'react-router-dom'
export default class AboutUi extends Component {
  constructor(props){
    super(props)
    //console.log(this.props.BorrowCount.aboutReducer)
  }
  render(){
    //console.log(this.props)
    let {BorrowCount:{aboutReducer:{borrowCount}}}=this.props
    console.log(borrowCount)
    return(
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
              <span className="money">{borrowCount.raiseAmount}</span>
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
        <h2>{borrowCount.overdueTimeDesc}</h2>
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
        <NavLink to="#/">
            <img src="//images.iqianjin.com/mimages/mobile/about/disclosure/nianbao.jpg" alt=""/>
        </NavLink>
      </div>
    </div>
    )
  }
  componentDidMount(){
    //console.log(this.props)
    this.props.getBorrowCount();
  }
}