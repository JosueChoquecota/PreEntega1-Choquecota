import React, { useState } from 'react'
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Components/Context/carContext';
import CartPage from './Components/CarWidget/CartPage';
import Checkout from './Components/checkout/checkout';
import CompraExitosa from './Components/checkout/CompraExitosa';
function App() {
  return (
      <BrowserRouter>
      <CartProvider>
          <Navbar/>       
            <Routes>
              <Route path='/' element= {<ItemListContainer/>}/>
              <Route path='/categoria/:categoryId' element= {<ItemListContainer/>}/>
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/cart'element={<CartPage/>}/> 
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='/CompraExitosa/:id' element={<CompraExitosa/>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App