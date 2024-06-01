import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const fiveimages=tvData.slice(0,5)
    return (
      <>
       <h2>Tves</h2>
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

export default Tv