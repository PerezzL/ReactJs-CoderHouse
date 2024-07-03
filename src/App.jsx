import './App.css';
import React, { useState } from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner.jsx';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '../src/Componentes/PageNotFound/PageNotFound.jsx';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner title="Sportacus Shop" />} />
          <Route path="/category/:categoryId" element={<ItemListConteiner title="Sportacus Shop" />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;