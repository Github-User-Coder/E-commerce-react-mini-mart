import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
const Fridgepage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {fridgeData.map((item)=>{
                return(
                    <div>
                    <div className='pageimg'>
                        <img src={item.image} alt="" />
                    </div>
                    <div>
                        {item.company},{item.model}
                    </div>
                    </div>
                )
            })}
        </div>
        </>     
      )
}

export default Fridgepage