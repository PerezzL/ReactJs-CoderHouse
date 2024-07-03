import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Image, Text, Button, Stack, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, description, id, imageUrl, price, stock }) => {
  const onAdd = (quantity) => {
    toast(`Agregaste ${quantity} productos`);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image src={imageUrl} alt={name} boxSize="150px" mx="auto" />

      <Stack mt={4} spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text color="gray.500">{description}</Text>
        <Text fontSize="lg" color="teal.600">
          ${price}
        </Text>
        <ButtonGroup spacing='2'>
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
        </ButtonGroup>
        <Button colorScheme="teal" as={Link} to={`/product/${id}`}>
          Ver detalles
        </Button>
      </Stack>
      <ToastContainer />
    </Box>
  );
};

export default ProductCard;