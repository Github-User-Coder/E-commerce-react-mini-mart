import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {
    const fiveimages=furnitureData.slice(0,5)
    return (
      <>
       <h2>furnitures</h2>
        <div className='proSection'>
          {
              fiveimages.map((item)=>{
                  return(
                      <div className='imgBox'>
                          <img className='proimage' src={item.image} alt="" />
                      </div>
                  )
              })
          }
      </div>
      </>
    )
}

export default Furniture