import React from 'react';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Flex, Text, Button, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Center } from '@chakra-ui/react';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(Context);
  
    if (cart.length === 0) {
      return (
        <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
          <Text>Todavía no agregaste productos al carrito</Text>
          <Button as={Link} to='/' colorScheme='teal' mt={4}>Ver productos</Button>
        </Flex>
      );
    } else {
      return (
        <TableContainer w={'80%'} m={'0 auto'} mt={10}>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th fontSize={'1rem'} color={'#416d6d'}>Producto</Th>
                <Th fontSize={'1rem'} color={'#416d6d'}>Cantidad</Th>
                <Th fontSize={'1rem'} color={'#416d6d'}>Precio</Th>
                <Th fontSize={'1rem'} color={'#416d6d'}>Subtotal</Th>
                <Th fontSize={'1rem'} color={'#416d6d'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((prod, index) => (
                <Tr key={prod.id} bg={index % 2 === 0 ? '#3F747D' : '#c5d0d3'} color={index % 2 === 0 ? '#c5d0d3' : '#3F747D'}>
                  <Td border={'none'}>{prod.nombre}</Td>
                  <Td border={'none'}>{prod.quantity}</Td>
                  <Td border={'none'}>{prod.precio}</Td>
                  <Td border={'none'}>{prod.precio * prod.quantity}</Td>
                  <Td border={'none'}>
                    <Button
                      bg={'transparent'}
                      fontSize={'1.5rem'}
                      color={index % 2 === 0 ? '#c5d0d3' : '#3F747D'}
                      _hover={{
                        backgroundColor: 'transparent',
                        color: index % 2 === 0 ? '#c5d0d3' : '#416d6d',
                      }}
                      onClick={() => removeItem(prod.id)}
                    >
                      <RiDeleteBin4Line />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Center mt={10}>
            <Flex bg={'#3F747D'} w={'90%'} h={'5vh'} justify={'space-around'} align={'center'}>
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
                _hover={{
                  backgroundColor: '#608e8e',
                  color: '#c5d0d3',
                }}
              >
                <span className='iconClearCart'>
                  <RiDeleteBin7Line />
                </span>
                Vaciar carrito
              </Button>
              <Button
                as={Link}
                to='/checkout'
                w={'15rem'}
                height={'3rem'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                backgroundColor={'#3F747D'}
                color={'#fff'}
                _hover={{
                  backgroundColor: '#608e8e',
                  color: '#fff',
                  borderRadius: '10px'
                }}
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
