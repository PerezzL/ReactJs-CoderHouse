import React from 'react';
import { Box, Image, Text, Button, Stack } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product, onAdd }) => {
    const { name, description, imageUrl, price, stock } = product;
    
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image src={imageUrl} alt={name} boxSize="300px" mx="auto" />

      <Stack mt={4} spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text color="gray.500">{description}</Text>
        <Text fontSize="lg" color="teal.600">
          Precio: ${price}
        </Text>
        <Text>Stock disponible: {stock}</Text>
        <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
        <Button colorScheme="teal" mt={4} onClick={() => onAdd(1)}>
            Agregar al carrito
        </Button>
      </Stack>
    </Box>
  );
};

export default ItemDetail;
