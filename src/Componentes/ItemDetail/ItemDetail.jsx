import React from 'react';
import { Box, Image, Text, Stack } from '@chakra-ui/react';

const ItemDetail = ({ name, description, imageUrl, price, stock }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Image src={imageUrl} alt={name} boxSize="300px" mx="auto" />

      <Stack mt={4} spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          {name}
        </Text>
        <Text color="gray.500">{description}</Text>
        <Text fontSize="lg" color="teal.600">
          ${price}
        </Text>
        <Text>Stock disponible: {stock}</Text>
      </Stack>
    </Box>
  );
};

export default ItemDetail;
