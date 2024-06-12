import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import IconoPelota from './imagenes/IconoPelota.png';


function App() {

  return (
    <ChakraProvider>
      <NavBar Icono={IconoPelota} />
      <ItemListConteiner title='Sportacus Shop'/>
    </ ChakraProvider>
  )
}

export default App
