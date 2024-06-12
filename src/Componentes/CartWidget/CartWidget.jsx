import { Box } from '@chakra-ui/react';
import React from 'react';
import { HiShoppingCart } from "react-icons/hi2";

const CartWidget = () => {
  return (
    <Box position={'absolute'} right={'0'} marginRight={4} boxSize={'40px'} mt={5}>
      <HiShoppingCart size={'100%'} />
    </Box>
  )
}

export default CartWidget
