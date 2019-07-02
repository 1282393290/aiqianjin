import React, {Component} from 'react'
import '@/styles/home/hotProduct.scss'
import ProductNav from './ProductNav'
import ProductItem from './ProductItem'
import AdsScroll from './AdsScroll';

class HotProduct extends Component {
  render () {
    return (
      <div className="home-hotProduct">
        <ProductNav title="热门推荐" />
        <div className="prodcut-item-wrap">
          <ProductItem />
          <ProductItem />
        </div>
        <AdsScroll />
      </div>
    )
  }
}

export default HotProduct
