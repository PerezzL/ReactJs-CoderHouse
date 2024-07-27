import React, { useContext, useState } from 'react'
import { Card, Heading, Text, Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';

const ItemDetail = ({ name, description, id, imageUrl, price, stock }) => {
  const [ quantity, setQuantity ] = useState(0);
  const { addItem } = useContext(Context);

  console.log('ItemDetail props:', { name, description, id, imageUrl, price, stock });

  const onAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
    }
    setQuantity(quantity);
    addItem(item, quantity);
      toast.success(`Agregaste ${quantity} productos`);
  }

  return (
    <>
      <Card w={'80%'} h={'100%'} boxShadow='lg' mt={10}>
        <Flex
          wrap={'wrap'}
          align={'center'}
          justify={'space-between'}
          w={'100%'}
          h={'100%'}
          className='cardFlex'
        >
          <Flex
            w={'40%'}
            h={'90%'}
            justify={'center'}
            align={'center'}
          >
            <Image
              src={imageUrl}
              alt={name}
              borderRadius="lg"
              boxSize='100%'
              objectFit='contain'
              w='100%'
              h='400px'
              ml={2}
              boxShadow="5px 0 10px rgba(0, 0, 0, 0.5)"
            />
          </Flex>
          <Flex
            direction={'column'}
            justify={'space-around'}
            align={'start'}
            w={'50%'}
            minHeight={'400px'}
          >
            <Heading size="xl" color="black" h={'4rem'}>
              {name}
            </Heading>
            <Text color="black" fontSize="xl" w={'95%'}>
              {description}
            </Text>
            <Text color="#3F74F3F3EF7D" fontSize="2xl">
              ${price}
            </Text>
            <Flex>
              <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
            </Flex>
          </Flex>
        </Flex>
      </Card>
      <ToastContainer />
    </>
  );
};

export default ItemDetail;
