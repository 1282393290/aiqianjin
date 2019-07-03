import React, { Component } from 'react'
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import "@/styles/introduce/leftintroduce.scss"

export default class Leftintroduce extends Component {
  render() {
      const data = [
        {
          year: "1",
          sales: 45.58
        },
        {
          year: "2",
          sales: 39
        },
        {
          year: "3",
          sales: 47
        },
        {
          year: "4",
          sales: 49
        },
        {
          year: "5",
          sales: 54
        },
        {
          year: "6",
          sales: 52
        },
        {
          year: "7",

        },
        {
          year: "8",

        },
        {
          year: "9",

        },
        {
          year: "10",

        },
        {
          year: "11",

        },
        {
          year: "12",

        }
      ];
      const cols = {
        sales: {
          tickInterval: 10
        }
      }
    return (
          <div className="mian-tet">
          {/* 平台资料 */}
              <div className="mian-top">
                <div className="mian-img">
                  <i><img src="./imgs/img01.png" alt=""/></i>
                  <p>平台资料</p>
                </div>
                <ul className="box-bottom">

                  <li><span>平台信息</span></li>
                  <li><span>收费标准</span></li>
                  <li><a href="https://www.iqianjin.com/event/regProtocol.jsp">
                  <span>用户注册协议</span>
                  </a></li>
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
                 {/* 平台数据 */}
              <div className="mian-top">
                <div className="mian-img">
                  <i><img src="./imgs/img02.png" alt=""/></i>
                  <p>平台数据</p>
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
              {/* 数据条 */}
                <div className="graph ">
                <Chart height={250} data={data} scale={cols} forceFit>
                <Axis name="year" />
                <Axis name="sales" />
                <Tooltip
                crosshairs={{
                  type: "y"
                }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
                </div>
                {/* 荣誉奖项 */}
                <div className="honor">



                {/* 圈圈 */}
                  <div className="honorCircle">
                    <div className="honor-qq"></div>


                  </div>

                </div>
              {/* 团队介绍 */}
              <div className="mian-top">
                <div className="mian-img">
                  <i><img src="./imgs/img01.png" alt=""/></i>
                  <p>团队介绍</p>
                </div>
                <ul className="box-bottom">

                  <li><span>管理团队</span></li>
                  <li><span>组织架构</span></li>
                  <li><span>员工概况</span></li>
                </ul>
              </div>


        {/* 关于我们 */}
        <div className="mian-top">
                <div className="mian-img">
                  <i><img src="./imgs/img01.png" alt=""/></i>
                  <p>关于我们</p>
                </div>
                <ul className="box-bottom">

                  <li><span>联系我们</span></li>
                  <li><span>办公环境</span></li>
                </ul>
              </div>
        {/* 底部签名图 */}
        <img
        className="pilou"
        src="./imgs/qianming.png" alt=""/>

        {/* 底部电话号码 */}
        <div className="base-content-2">
          <ul>
            <li>
                <dl
                  className="clipboard-btn">
                  <dt>官方电话</dt>
                  <dd>400-812-8808</dd>
                </dl>
            </li>
            <li>
              <dl  className="clipboard-btn qq">
                <dt>官方微信</dt>
                <dd>iqianjinguanfang</dd>
              </dl>
            </li>
            <li>
             <dl className="clipboard-btn  ww">
                <dt>官方网站</dt>
                <dd>www.iqianjin.com</dd>
              </dl>
            </li>
          </ul>
        </div>


    </div>
    )
  }
}
