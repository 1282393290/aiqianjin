import React, {Component} from 'react'
import '@/styles/home/Footer.scss'

class Footer extends Component {
  render () {
    return (
      <div className="home-footer">
        <button className="slogan">迄今为止 如约履行</button>
        <p>
          <a href="#/">电脑版</a>|
          <a href="#/">电脑版</a>|
          <a href="#/">电脑版</a>
        </p>
        <p>
          爱钱进（北京）信息科技有限公司©2019 iqianjin.com.All Rights Reserved
        </p>
        <p>京公网安备 11010102001399号</p>
        <p>京ICP备14017729 京ICP证150121号</p>
        <p>网贷有风险，出借需谨慎</p>
        <p>预期年化结算利率不等于实际出借回报，以实际出借回报为准</p>
        <p>客服电话：400-812-8808</p>
      </div>
    )
  }
}

export default Footer