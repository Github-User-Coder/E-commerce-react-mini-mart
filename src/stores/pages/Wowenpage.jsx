import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'

const Wowenpage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            {womanData.map((item)=>{
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

export default Wowenpage