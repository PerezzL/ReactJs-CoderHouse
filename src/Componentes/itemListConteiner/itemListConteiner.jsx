import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, SimpleGrid, Stack, Text, Button } from '@chakra-ui/react';
import ProductCard from '../ProductCard/ProductCard';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListConteiner = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  console.log(db);

  useEffect(() => {
    setLoading(false);
      const getData = async() => {
        const colecction = collection(db, 'products');
        const queryRef = !categoryId ?  colecction : query(colecction, where('category', '==', categoryId));
        const response = await getDocs(queryRef);
        console.log(response)

        const productos = response.docs.map((docs) => {
          const newItem = {          
            ...docs.data(),
            id: docs.id
          }
          return newItem
        })
        setProducts(productos);
        setLoading(false);
      }
      getData();
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