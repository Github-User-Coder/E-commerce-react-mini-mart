import React from 'react'
import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
    const fiveimages=kitchenData.slice(0,5)
    return (
      <>
       <h2>watches</h2>
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

export default Kitchen