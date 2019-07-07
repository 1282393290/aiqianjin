import React from 'react'
import '@/styles/home/ProductItem.scss'

function ProductItem (props) {
  //0: {baseRate: "11.00", buttonTitle: "立即投资", limitCount: "1", limitUnit: "月", period: 1, …}
  const {limitCount,limitUnit,baseRate,tags,buttonTitle} = props.aiyinbaoListItem
  return (
    <div className="product-item">
      <div className="month"><span>{limitCount}</span>{limitUnit}</div>
      <div className="details">
        <div className="details-left">
          <strong>{baseRate}<em>%</em></strong>
          <span className="pre">预期年化算利率</span>
          <span className="priority">{tags[0]}</span>
        </div>
        <div className="details-right">
          <button>{buttonTitle}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem