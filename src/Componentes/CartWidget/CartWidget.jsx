import { Box } from '@chakra-ui/react';
import React from 'react';
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to="/PageNotFound" style={{ textDecoration: 'none' }}>
      <Box position="absolute" right={0} marginRight={4} top={10} boxSize="40px" cursor="pointer">
        <HiShoppingCart size={'100%'} />
      </Box>
    </Link>
  );
}

export default CartWidget;
