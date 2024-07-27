import React from 'react';
import { Box, Image, Text, Stack, Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, description, imageUrl, price, stock, id }) => {
  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos`);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image src={imageUrl} alt={name} boxSize="150px" mx="auto" />

      <Stack mt={4} spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text color="gray.500">{description}</Text>
        <Text fontSize="lg" color="#3498db">
          ${price}
        </Text>
        <ButtonGroup spacing="2">
          <Button bg="#5784a7" color="black" as={Link} to={`/product/${id}`}>
            Ver detalles
          </Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default ProductCard;
