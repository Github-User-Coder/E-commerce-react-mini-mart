import React from 'react'
import { mobileData } from '../data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useCart } from '../context/CartContext'

const MobileSingle = () => {
    const {id}= useParams()
    const {addToCart,cartItem}=useCart()
    const product=mobileData.find((item)=>item.id==id)
  return (
    <>
    <Navbar/>
    <div className='indpage'>
        <div className="indimage">
            <img src={product.image} alt="" />
        </div>
        <div className="inddetails space">
            <div className="indcompany">
                <h2>{product.company}</h2>
            </div>
        <div className="indmodel space">
            <h3>{product.model}</h3>
        </div>
        <div className="indprice space">
            <h2>{product.price}</h2>
        </div>
        <div className="inddes space">
            <p>
                {product.description}
            </p>
        </div>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default MobileSingle