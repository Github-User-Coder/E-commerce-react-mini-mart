import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'


const Furniturepage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {furnitureData.map((item)=>{
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

export default Furniturepage