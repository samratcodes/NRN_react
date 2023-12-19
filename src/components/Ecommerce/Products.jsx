import React from 'react'
import Fetch from '../Fetch/Fetch'
import './Products.css'
const Products = () => {

  return (
   <div className='productComponent'>
     <div className='Products'>
      <div className="recommended_product">
        <div className="recommended_text">
          Recommended products :
        </div>
      <Fetch/>
      </div>
      <div className="recommended_product">
        <div className="recommended_text">
          Just for you
        </div>
      <Fetch/>
      </div>
      <div className="recommended_product">
        <div className="recommended_text">
          Recommended products :
        </div>
      <Fetch/>
      </div>
    </div>
   </div>
  )
}

export default Products
