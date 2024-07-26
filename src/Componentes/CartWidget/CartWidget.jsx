import { Badge, Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
      <Box position="absolute" right={4} marginRight={4} top={6} boxSize="40px" cursor="pointer">
        <Link to="/cart">
          <IoCartOutline size={'100%'} />
        </Link>
        <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'}>
          {getQuantity() > 0 ? (
            <Badge position="absolute" top="0" right="0" transform="translate(50%, -50%)"borderRadius={'50%'} bg="red.500" color="white" fontSize="0.8em" padding="0.3em 0.6em">
              {getQuantity()}
            </Badge>
          ) : null}
        </Flex>
      </Box>
  );
}

export default CartWidget;
