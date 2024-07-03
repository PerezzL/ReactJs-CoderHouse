import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, SimpleGrid, Stack, Text, Button } from '@chakra-ui/react';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts, getProductsByCategory } from '../../ObjetosDummies/ObjetosDummies';

const ItemListConteiner = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = categoryId ? getProductsByCategory : getProducts;
    fetchProducts(categoryId)
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <Stack spacing={6} p={4}>
        <Text fontSize='3xl' fontWeight='bold' textAlign='center' marginTop='4'>{title}</Text>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                <ProductCard {...product} />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default ItemListConteiner;
