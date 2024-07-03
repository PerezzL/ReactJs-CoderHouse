import React from 'react';
import { FaSortDown } from "react-icons/fa";
import { Input } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate(category === 'Todos' ? '/' : `/category/${category}`);
  };

  return (
    <Flex align={'center'} height={'10vh'} width={'100%'} backgroundColor={'#34495e'}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaSortDown />} mt={5} ml={4}>
          Catálogo
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleCategorySelect('Todos')}>Todo</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Camisetas')}>Camisetas</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Botines')}>Botines</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Guantes')}>Guantes</MenuItem>
          <MenuItem onClick={() => handleCategorySelect('Shorts')}>Shorts</MenuItem>
        </MenuList>
      </Menu>
      <Input
        placeholder='Buscar...'
        width={'20%'}
        height={'5vh'}
        backgroundColor={'white'}
        mt={5}
        position={'absolute'}
        left={"50%"}
        transform={"translateX(-50%)"}
      />
      <CartWidget />
    </Flex>
  );
};

export default NavBar;



