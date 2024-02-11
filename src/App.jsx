import { useState } from 'react'
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/categoria/:categoryId' element= {<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App