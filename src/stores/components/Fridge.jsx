import React from 'react'
import {fridgeData} from '../data/fridge'

const Fridge = () => {
    const fiveimages=fridgeData.slice(0,5)
      return (
        <>
         <h2>fridge</h2>
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

export default Fridge