import React, { Component } from 'react'

export default class Leftintroduce extends Component {
  render() {
    return (
          <div className="mian-tet">
          {/* 第一个模块 */}
              <div className="mian-top">
                <div className="mian-img">
                  <i><img src="./imgs/img01.png" alt=""/></i>
                  <p>平台资料</p>
                </div>
                <ul className="box-bottom">

                  <li><span>平台信息</span></li>
                  <li><span>收费标准</span></li>
                  <li><a href="https://www.iqianjin.com/event/regProtocol.jsp">用户注册协议</a></li>
                </ul>
              </div>
          {/* 文字模块 */}
              <div className="base-content">
                <div className="intro-txt">
                  <p>爱钱进（北京）信息科技有限公司（以下简称：爱钱进，英文名：IQianJin (Beijing) Information Technology Co., Ltd.），系凡普金科企业发展（上海）有限公司（简称“凡普金科”）旗下网络借贷信息中介平台。
                  </p>
                  <p>专注于大数据处理和金融科技研发，为个人提供更高效的智能金融服务和解决方案，用科技缩短人和金融服务的距离，促进金融服务平等化，努力践行普惠金融。
                  </p>
                  <p>爱钱进上线于2014年5月，位列第三方权威评级机构网贷天眼全国百强榜前十，始终致力于为用户提供简单、公平的互联网金融信息服务，是消费者心中靠谱的网络借贷信息服务平台。
                  </p>
                </div>
                <p className="intro-zankai"><span>展开</span></p>
              </div>

              <div className="mian-top">
                <div className="mian-img">
                  <i><img src="./imgs/img02.png" alt=""/></i>
                  <p>平台资料</p>
                </div>
                <ul className="box-bottom">

                  <li>
                    <p>1884天</p>
                    <p>稳定运营</p>
                  </li>
                  <li>
                    <p>1.604万</p>
                    <p>收费标准</p>
                  </li>
                  <li>
                    <p>100.341</p>
                    <p>逾期笔数</p>
                  </li>
                </ul>
              </div>



          </div>
    )
  }
}
