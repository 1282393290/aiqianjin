import React, {Component} from 'react'
import Leftintroduce from './left-introduce'
import "@/styles/base.scss"
import "@/styles/introduce/index.scss"

class Introduce extends Component {
  render () {
    return (
      <div className="harder">
        <div className="brands-banner">
          <img src="./imgs/banner.png" alt=""/>
        </div>
        <ul className="brands-tab">
          <li><span>平台介绍</span></li>
          <li><span>信息披露</span></li>
        </ul>

        <div className="mian">
          < Leftintroduce />



          <div class="base-content-2">
          <ul>
            <li>
                  <dl data-clipboard-text="400-812-8808" class="clipboard-btn">
                  <dt>官方电话</dt>
                  <dd>400-812-8808</dd>
                  </dl>
                  </li>
                  <li>
                    <dl data-clipboard-text="iqianjinguanwang" class="clipboard-btn">
                    <dt>官方微信</dt>
                    <dd>iqianjinguanfang</dd>
                    </dl>
                    </li>
                    <li>
                      <dl data-clipboard-text="www.iqianjin.com" class="clipboard-btn">
                      <dt>官方网站</dt>
                      <dd>www.iqianjin.com</dd>
                      </dl>
                      </li>
                    </ul>
                  </div>

        </div>

      </div>

    )
  }
}

export default Introduce
