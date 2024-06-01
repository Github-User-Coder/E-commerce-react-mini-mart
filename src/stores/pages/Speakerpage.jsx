import React from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'

const Speakerpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {speakerData.map((item)=>{
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

export default Speakerpage