import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, } from '@chakra-ui/react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../ObjetosDummies/ObjetosDummies';
import { BounceLoader } from 'react-spinners';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [showItemCount, setShowItemCount] = useState(false); 

  useEffect(() => {
    setLoading(true);
    getProductById(productId)
      .then((product) => {
        if (product) {
          setProduct(product);
          setShowItemCount(true);
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
          <ItemDetail product={product} onAdd={onAdd} />
        </Box>
      )}
    </Box>
  );
};

export default ItemDetailContainer;