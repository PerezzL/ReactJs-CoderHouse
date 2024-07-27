import React from 'react';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Flex, Text, Button, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Center } from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(Context);
  
    if (cart.length === 0) {
      return (
        <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
          <Text>No hay productos en el carrito</Text>
          <Button as={Link} to='/' bg={'#5784a7'} mt={4}>Ver productos</Button>
        </Flex>
      );
    } else {
      return (
        <TableContainer w={'80%'} m={'0 auto'} mt={10}>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th fontSize={'1rem'} color={'#34495e'}>Producto</Th>
                <Th fontSize={'1rem'} color={'#34495e'}>Cantidad</Th>
                <Th fontSize={'1rem'} color={'#34495e'}>Precio</Th>
                <Th fontSize={'1rem'} color={'#34495e'}>Subtotal</Th>
                <Th fontSize={'1rem'} color={'#34495e'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((prod) => (
                <Tr key={prod.id} color={'black'}>
                  <Td border={'none'}>{prod.name}</Td>
                  <Td border={'none'}>{prod.quantity}</Td>
                  <Td border={'none'}>{prod.price}</Td>
                  <Td border={'none'}>{prod.price * prod.quantity}</Td>
                  <Td border={'none'}>
                    <Button
                      bg={'transparent'}
                      fontSize={'1.5rem'}
                      color={'black'}
                      _hover={{
                        backgroundColor: 'transparent',
                        color: 'red',
                      }}
                      onClick={() => removeItem(prod.id)}
                    >
                      <RiDeleteBinLine />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Center mt={10}>
            <Flex bg={'#5784a7'} w={'90%'} h={'5vh'} justify={'space-around'} align={'center'}>
              <Text
                fontSize={'3xl'}
                color={'#c5d0d3'}
                w={'15rem'}
                height={'3rem'}
                textAlign={'center'}
              >
                Total: ${getTotalPrice()}
              </Text>
              <Button
                onClick={() => clearCart()}
                w={'15rem'}
                height={'3rem'}
                backgroundColor={'transparent'}
                color={'#c5d0d3'}
                fontSize={'xl'}
              >
                Vaciar carrito
              </Button>
              <Button
                as={Link}
                to='/checkout'
                w={'15rem'}
                height={'3rem'}
                backgroundColor={'transparent'}
                color={'#c5d0d3'}
                fontSize={'xl'}
              >
                Finalizar compra
              </Button>
            </Flex>
          </Center>
        </TableContainer>
      );
    }
  };
  
  export default Cart;
