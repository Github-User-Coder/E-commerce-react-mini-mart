import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'

const Kitchenpaage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {kitchenData.map((item)=>{
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

export default Kitchenpaage