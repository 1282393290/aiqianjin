import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '@/styles/home/Header.scss'

class Header extends Component {
  render () {
    return (
      <div className="home-header">
        <div className="home-header-inner">
          <a href="#/" className="logo">
            <img alt="logo" src="./imgs/icon-logo.png" />
          </a>
          <div className="log_reg">
            <Link to="/register">注册</Link>/
            <Link to="/login">登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header