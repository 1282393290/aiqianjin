import React, {Component} from 'react'
import { Carousel } from 'antd';
import '@/styles/home/AdsScroll.scss'

class AdsScroll extends Component {
  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
  constructor (props) {
    super(props)
  }
  render() {
    //{product: "爱盈宝3月期", amount: "5,000", name: "刘**", time: "21秒钟前"}
    return (
      <div className="scroll-wrap">
        <Carousel autoplay dotPosition='left'>
          <div>
            <h3>49秒前，刘*投资爱盈宝1月期2，000元</h3>
          </div>
          {
            this.props.scrollList.filter((item,index)=>{
              return index < 3
            })
            .map((item,index)=>{
              return (
                <div key={index}>
                  <h3>{`${item.time},${item.name}投资${item.product}${item.amount}`}</h3>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    );
  }
}

export default AdsScroll