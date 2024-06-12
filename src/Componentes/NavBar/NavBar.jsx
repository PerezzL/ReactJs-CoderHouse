import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { FaSortDown } from "react-icons/fa";
import { Input } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Heading,
    Button,
    Flex,
  } from '@chakra-ui/react'

const NavBar = ({ Icono }) => {
  return (
    <Flex align={'centre'} height={'10vh'} width={'100%'} backgroundColor={'#34495e'}>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaSortDown />} mt={5} ml={4}>
                Catálogo
            </MenuButton>
            <MenuList>
                <MenuItem>Camisetas</MenuItem>
                <MenuItem>Botines</MenuItem>
                <MenuItem>Guantes</MenuItem>
                <MenuItem>Shorts</MenuItem>
            </MenuList>
        </Menu>
        <Input placeholder='Buscar...' width={'20%'} height={'5vh'} backgroundColor={'white'} mt={5} position={'absolute'} left={"50%"} transform={"translateX(-50%)"}/>
      <CartWidget />
    </Flex>
  );
};

export default NavBar
