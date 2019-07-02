import React, {Component} from 'react'
import { Carousel } from 'antd';
import '@/styles/home/AdsScroll.scss'

class AdsScroll extends Component {
  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    return (
      <div className="scroll-wrap">
        <Carousel autoplay dotPosition='left'>
          <div>
            <h3>49秒前，刘*投资爱盈宝1月期2，000元</h3>
          </div>
          <div>
            <h3>1秒前，罗*投资爱盈宝1月期2，000元</h3>
          </div>
          <div>
            <h3>一分钟前，陈*投资爱盈宝1月期2，000元</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default AdsScroll