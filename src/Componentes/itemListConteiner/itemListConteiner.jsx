import { Center, Heading } from '@chakra-ui/react';
import React from 'react';

const ItemListConteiner = ({ title }) => {
  return (
    <Center>
        <Heading mt={6}>{title}</Heading>
    </Center>
  )
}

export default ItemListConteiner
