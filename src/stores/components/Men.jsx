import React from 'react'
import {menData} from '../data/men'

const men = () => {
    const fiveimages=menData.slice(0,5)
      return (
        <>
         <h2>mens</h2>
          <div className='proSection'>
            {
                fiveimages.map((item)=>{
                    return(
                        <div className='imgBox'>
                            <img className='proimage'src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
        </>
      )
}

export default men