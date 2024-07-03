import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import { getProductById } from '../../ObjetosDummies/ObjetosDummies';
import { BounceLoader } from 'react-spinners';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      getProductById(productId)
        .then((product) => {
          if (product) {
            setProduct(product);
          } else {
            console.error(`Product with id ${productId} not found.`);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching product:", error);
          setLoading(false);
        });
    }, [productId]);

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos`);
  };

  return (
    <Box>
      {loading ? (
        <Flex justify="center" align="center" h="50vh">
          <BounceLoader color="#55868C" />
        </Flex>
      ) : (
        <Box p={4}>
          <ItemDetail {...product} />
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Precio: ${product.price}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {product.description}
          </Text>
          <ItemCount initialValue={1} stock={product.stock} onAdd={onAdd} />
          <Button colorScheme="teal" mt={4} onClick={() => onAdd(1)}>
            Agregar al carrito
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ItemDetailContainer;
