import React from 'react'
import {computerData} from '../data/computers'

const Computers = () => {
    const fiveimages=computerData.slice(0,5)
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

export default Computers