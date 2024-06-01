import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'

const Computerpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {computerData.map((item)=>{
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

export default Computerpage