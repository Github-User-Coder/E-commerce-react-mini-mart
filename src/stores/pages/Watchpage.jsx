import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'

const Watchpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {watchData.map((item)=>{
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

export default Watchpage