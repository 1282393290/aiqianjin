import React, { Component } from 'react'
import "@/styles/introduce/rightintroduce.scss"

export default class Rightintroduce extends Component {
  render() {
    return (
      <div className="mian-right">
      {/* 风险控制 */}
        <div className="mian-top">
          <div className="mian-img">
           <i className="icon-fxkz"></i>
            <p>风险控制</p>
          </div>
          <ul className="box-bottom">

            <li><span><a href="https://m.iqianjin.com/app/security/index.jsp?page=4">真实借款人</a></span></li>
            <li><span><a href="https://m.iqianjin.com/app/security/index.jsp?page=3">信息透明</a></span></li>
            <li><span>风控体系</span></li>
          </ul>
        </div>
        {/* 地图 */}
        <div className="base-content">
          <div className="fengxian-img"></div>
          <h2>智能小额分散</h2>
          <p>采用智能小额分散式借贷，平均每笔借款金额3～6万元，借款人覆盖全国29个省、359个城市，平均每笔投资拆分到18.1个项目，真正做到小额分散，规避风险。</p>
        </div>
        <div className="mian-top">
            <div className="mian-img">
            <i className="icon-ditu"></i>
            <p>银行资金存管</p>
            </div>
            <ul className="box-bottom">

              <li><span>资金存管情况</span></li>
              <li><span>系统测评声明</span></li>

            </ul>
          </div>
          {/* 用户图 */}
          <div className="base-content">
            <img src="./imgs/cunguan.svg" alt=""/>
          </div>
          {/* 资深认证 */}
          <div className="mian-top">
          <div className="mian-img">
           <i className="icon-renzheng"></i>
           <p>资质认证</p>
          </div>
          <ul className="box-bottom">

            <li><span>互金协会</span></li>
            <li><span>高新技术企业</span></li>
            <li><span>备案信息</span></li>
          </ul>
        </div>
        {/* 其他信息 */}
        <div className="mian-top">
          <div className="mian-img">
           <i className="icon-qita"></i>
           <p>其他信息</p>
          </div>
          <ul className="box-bottom">

            <li><span>企业执照</span></li>
            <li><span>实际控制人</span></li>
          </ul>
          <ul className="box-bottom">

            <li><span>自律承诺书</span></li>
            <li><span>信息披露承诺书</span></li>
          </ul>
        </div>
      {/* 报告 */}
      <div className="mian-top">
          <div className="mian-img">
           <i className="icon-baogao"></i>
           <p>报告</p>
          </div>
          <ul className="box-bottom">

            <li><span>审计报告</span></li>
            <li><span>合规报告</span></li>
          </ul>
        </div>
        {/* 底部签名 */}
        <img
        className="pilou"
        src="./imgs/qianming.png" alt=""/>

      </div>
    )
  }
}
