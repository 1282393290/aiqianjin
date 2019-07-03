import React from 'react'
import '@/styles/home/ProductNav.scss'

function ProductNav (props) {
  return (
    <div className="product-nav">
      <h4>{props.title}</h4>
      <div className="more-view"><span>查看全部</span>></div>
    </div>
  )
}

export default ProductNav