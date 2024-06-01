import React from 'react'
import {mobileData} from '../data/mobiles'
 
    const Mobiles = () => {
        const fiveimages=mobileData.slice(0,5)
      return (
        <>
         <h2>mobiles</h2>
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

export default Mobiles