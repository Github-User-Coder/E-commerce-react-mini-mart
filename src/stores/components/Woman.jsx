import React from 'react'
import {womanData} from '../data/woman'

const Woman = () => {
    const fiveimages=womanData.slice(0,5)
    return (
      <>
       <h2>woman dresses</h2>
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

export default Woman