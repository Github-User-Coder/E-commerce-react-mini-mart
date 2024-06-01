import React from 'react'
import {speakerData} from'../data/speaker'

const Speaker = () => {
    const fiveimages=speakerData.slice(0,5)
  return (
    <>
    <h2>computers</h2>
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

export default Speaker