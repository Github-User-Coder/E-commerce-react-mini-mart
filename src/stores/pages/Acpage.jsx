import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'

const Acpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {acData.map((item)=>{
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

export default Acpage