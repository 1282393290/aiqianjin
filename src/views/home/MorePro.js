import React, {Component} from 'react'
import '@/styles/home/MorePro.scss'


class MorePro extends Component {
  render () {
    return (
      <div className="home-morePro">
        <ul>
          <li>
            <a className="morePro-item">网贷课堂</a>
          </li>
          <li>
            <a className="morePro-item">数据披露</a>
          </li>
          <li>
            <a className="morePro-item">常见问题</a>
          </li>
          <li>
            <a className="morePro-item">行业发声</a>
          </li>
          <li>
            <a className="morePro-item">联系我们</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default MorePro