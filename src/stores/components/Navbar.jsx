import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
const {cartItems}=useCart()


  return (
    <>
    <div className='navSection'>
      <div className='title'>
        <h2>mini-Mart</h2>
      </div>
      <div className='search'>
       <input type="text" placeholder='search...' />
      </div>
      
        <div className="user-details">
          signup/signin
        </div>
        <Link to='/cart'>
        <div className="cart">
          cart <span>
            {cartItems.length}
          </span>
        </div>
        </Link>
       </div>
       <div className='submenu'>
      <ul>
        <Link to="/mobiles">
        <li>mobiles</li>
        </Link>
        <Link to="/computers">
        <li>computers</li>
        </Link>
        <Link to="/speakers">
        <li>speakers</li>
        </Link>
        <Link to="/watches">
        <li>watches</li>
        </Link>
        <Link to="/mens">
        <li>mens wear</li>
        </Link>
        <Link to="/womens">
        <li>women wear</li>
        </Link>
        <Link to="/kitchen">
        <li>kitchen</li>
        </Link>
        <Link to="/fridges">
        <li>Fridge</li>
        </Link>
        <Link to="/tvs">
        <li>Tvs</li>
        </Link>
        <Link to="/furnitures">
        <li>furniture</li>
        </Link>
        <Link to="/acs">
        <li>Ac</li>
        </Link>
        <Link to="/mobiles">
        <li>books</li>
        </Link>
      </ul>
     </div>   
    </>
  );
  
};

export default Navbar