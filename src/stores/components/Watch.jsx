import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
    const fiveimages=watchData.slice(0,5)
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

export default Watch