import React,{useState} from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Mobilepage = () => {
    const [selectedproduct,setselectedproduct]= useState([])
    const companyHandler=(mango)=>{
           if(selectedproduct.includes(mango)){
            setselectedproduct(selectedproduct.filter(item=>item!==mango))
           }else{
            setselectedproduct([...selectedproduct,mango])
           }
    }
    const filteredproduct=selectedproduct.length==0?
     mobileData : mobileData.filter((orange)=>selectedproduct.includes(orange.company))
  return (
    <>
    <Navbar/>
    <div className="fullpage">
    <div className="proselected">
        {mobileData.map((phone)=>{
            return(
                <div className='proinput'>
                    <label >
                        <input type="checkbox"
                        checked={selectedproduct.includes(phone.company)}
                        onChange={()=>companyHandler(phone.company)}
                         />
                         {phone.company}
                    </label>
                </div>
            )
        })}
    </div>
    <div className='pageSection'>
        {filteredproduct.map((item)=>{
            return(
                <div>
                    <Link to={`/mobiles/${item.id}`}>
                <div className='pageimg'>
                    <img src={item.image} alt="" />
                </div>
                </Link>
                <div>
                    {item.company},{item.model}
                </div>
                </div>
            )
        })}
    </div>
    </div>
    </>     
  )
}

export default Mobilepage