import './App.css';
import React, { useState } from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner.jsx';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import PageNotFound from '../src/Componentes/PageNotFound/PageNotFound.jsx';
import Cart from '../src/Componentes/cart/cart.jsx'
import { CartContextProvider } from './context/CartContext.jsx';

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListConteiner title="Sportacus Shop" />} />
              <Route path="/category/:categoryId" element={<ItemListConteiner title="Sportacus Shop" />} />
              <Route path="/product/:productId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;