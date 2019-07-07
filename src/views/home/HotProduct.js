import React, {Component} from 'react'
import '@/styles/home/hotProduct.scss'
import ProductNav from './ProductNav'
import ProductItem from './ProductItem'
import AdsScroll from './AdsScroll';

class HotProduct extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {scrollList,aiyinbaoList} = this.props
    return (
      <div className="home-hotProduct">
        <ProductNav title="热门推荐" />
        <div className="prodcut-item-wrap">
          {
            aiyinbaoList.filter((item,index)=>{
              return index <=1
            }).map((item,index)=>{
              return  <ProductItem key={index} aiyinbaoListItem={item} />
            })
          }
        </div>
        <AdsScroll scrollList={scrollList} />
      </div>
    )
  }
}

export default HotProduct
