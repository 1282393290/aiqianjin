import React, { Component } from 'react'
import '@/styles/home/ProductItem.scss'

function ProductItem (props) {
  return (
    <div className="product-item">
      <div className="month"><span>1</span>月</div>
      <div className="details">
        <div className="details-left">
          <strong>11.99<em>%</em></strong>
          <span className="pre">预期年化算利率</span>
          <span className="priority">新手专享</span>
        </div>
        <div className="details-right">
          <button>立即投资</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem