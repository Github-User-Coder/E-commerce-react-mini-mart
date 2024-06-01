import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Landingpage from './stores/pages/Landingpage';
import Kitchen from './stores/components/Kitchen';
import Mobilepage from './stores/pages/Mobilepage';
import Computerpage from './stores/pages/Computerpage';
import Menpage from './stores/pages/Menpage';
import Wowenpage from './stores/pages/Wowenpage';
import Kitchenpaage from './stores/pages/Kitchenpaage';
import Acpage from './stores/pages/Acpage';
import Fridgepage from './stores/pages/Fridgepage';
import Furniturepage from './stores/pages/Furniturepage';
import Speakerpage from './stores/pages/Speakerpage';
import Tvpage from './stores/pages/Tvpage';
import Watchpage from './stores/pages/Watchpage';
import MobileSingle from './stores/singles/MobileSingle';
import UserCart from './stores/UserCart';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/mobiles' element={<Mobilepage/>}/>
        <Route path='/computers' element={<Computerpage/>}/>
        <Route path='/mens' element={<Menpage/>}/>
        <Route path='/womens' element={<Wowenpage/>}/>
        <Route path='/kitchen' element={<Kitchenpaage/>}/>
        <Route path='/acs' element={<Acpage/>}/>
        <Route path='/fridges' element={<Fridgepage/>}/>
        <Route path='/furnitures' element={<Furniturepage/>}/>
        <Route path='/speakers' element={<Speakerpage/>}/>
        <Route path='/tvs' element={<Tvpage/>}/>
        <Route path='/watches' element={<Watchpage/>}/>
           <Route path='/mobiles/:id' element={<MobileSingle/>}/>
        <Route path='/cart' element={<UserCart/>}/>
           
      </Routes>
    
      </div>
  )
}

export default App;
