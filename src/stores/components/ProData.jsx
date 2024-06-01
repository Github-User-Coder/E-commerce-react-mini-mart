import React from 'react'
import {proData} from '../data/proData'

const ProData = () => {
    const fiveimages=proData.slice(0,5)
      return (
        <>
         <h2>prodata</h2>
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

export default ProData