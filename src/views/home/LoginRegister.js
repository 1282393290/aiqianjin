import React, {Component} from 'react'
import { PageHeader } from 'antd'
import '@/styles/home/LoginRegister.scss'

class LoginRegister extends Component {
  render () {
    return (
      <div className="login-register">
        <PageHeader onBack={() => null} title="直接登录" />
        <div className="main-title">
          <h1>注册爱钱进</h1>
          <p>欢迎来到爱钱进，注册即送1088元新手大礼包</p>
        </div>
        <div className="form-wrap">
          <div className="form-input">
            <input type="text" placeholder="请输入手机号码" />  
            <input type="text" placeholder="请输入密码" style={{"display":"none"}} />
          </div>
          <div className="valid-wrap">
            <input type="text" placeholder="请输入短信验证码"/> 
            <button className="btn-send-code">获取验证码</button>
            <img src="" alt="ss" className="img-code" style={{"display":"none"}} /> 
          </div>  
          <div className="server-protocol">
            <i className="iconfont">*</i>
            <span>
              我已阅读并同意
              <a href="https://www.iqianjin.com/html/regProtocol.html">《爱钱进注册协议》</a>、
              <a href="https://www.iqianjin.com/event/regCfca.jsp">《CFCA数字证书服务协议》</a>
            </span>
          </div>
          <div className="submit">
            <button>注册</button>  
          </div>
          <p className="forget-tip"><a href="/m/forgot">忘记密码？</a></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        </div>
      </div>
    )
  }
}

export default LoginRegister