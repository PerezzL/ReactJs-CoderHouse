import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter';
import { Box, Button, Text } from "@chakra-ui/react";

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, sumar, restar } = useCounter(initialValue, stock)

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap="4">
      <Button colorScheme="teal" size="sm" onClick={restar}>
        -
      </Button>
      <Text fontSize="2xl" fontWeight="bold">
        {count}
      </Text>
      <Button colorScheme="teal" size="sm" onClick={sumar}>
        +
      </Button>
    </Box>
  )
}

export default ItemCount