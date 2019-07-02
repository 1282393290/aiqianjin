import React, { Component } from 'react'
import { Carousel } from 'antd';
import '@/styles/home/Lbt.scss'

class Lbt extends Component {
  render () {
    return (
      <div className="home-lbt">
        <Carousel autoplay afterChange={onChange}>
          <div>
            <img src="./imgs/xlsz.png" />
          </div>
          <div>
            <img src="./imgs/xlsz.png" />
          </div>
        </Carousel>
      </div>
    )
  }
}

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default Lbt