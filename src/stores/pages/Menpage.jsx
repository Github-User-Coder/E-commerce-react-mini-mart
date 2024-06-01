import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'

const Menpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {menData.map((item)=>{
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

export default Menpage