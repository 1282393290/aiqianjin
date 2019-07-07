import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import '@/styles/home/IntroNav.scss'
class IntroNav extends Component {
  render () {
    return (
      <div className="intro-wrap">
        <ul>
          <li>
            <Link to="/about" className="nav-item">
              <i className="iconfont icon-fengxiankongzhix"></i>
              <span>稳定运营</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              <i className="iconfont icon-fengxiankongzhix"></i>
              <span>银行存管</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              <i className="iconfont icon-fengxiankongzhix"></i>
              <span>风险控制</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              <i className="iconfont icon-fengxiankongzhix"></i>
              <span>平台介绍</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default IntroNav