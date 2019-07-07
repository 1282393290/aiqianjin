import React, { Component } from 'react'
import { Carousel } from 'antd';
import '@/styles/home/Lbt.scss'

class Lbt extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="home-lbt">
        <Carousel autoplay afterChange={onChange}>
          <div>
            <img src={this.props[0]?this.props[0].imgUrl:""} />
          </div>
          <div>
            <img src={this.props[0]?this.props[0].imgUrl:""} />
          </div>
        </Carousel>
      </div>
    )
  }
}

function onChange(a, b, c) {
  //console.log(a, b, c);
}

export default Lbt