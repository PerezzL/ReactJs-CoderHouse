import './App.css';
import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner title="Sportacus Shop" />} />
          <Route path="/category/:categoryId" element={<ItemListConteiner title="Sportacus Shop" />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
