import React from 'react'
import data from './dataSlider';
import "./style/portfolio.scss"

function portfolioPage() {
  return (
    <div className="productList">
    {data.map((product) => (
      <div key={product.id} className="productCard">
        <img
          src={product.image}
          alt="product-img"
          className="productImage"
        />
      </div>
    ))}
  </div>

  )
}

export default portfolioPage