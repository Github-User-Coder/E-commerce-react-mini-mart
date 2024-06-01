import React from 'react'
import {acData} from '../data/ac'

const Ac = () => {
    const fiveimages=acData.slice(0,5)
    return (
      <>
       <h2>Aces</h2>
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

export default Ac