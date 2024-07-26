import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import products from '../services/products';

const Catalogo = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory === 'Todos' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <Box>
      {selectedCategory !== 'Todos' && (
        <Heading as="h2" size="xl" mb="4">{selectedCategory}</Heading>
      )}
      <Box display="flex" flexWrap="wrap">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default Catalogo;
