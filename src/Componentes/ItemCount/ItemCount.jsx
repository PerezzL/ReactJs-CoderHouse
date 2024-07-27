import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter';
import { Box, Button, Text } from "@chakra-ui/react";

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, sumar, restar } = useCounter(initialValue, stock)

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap="4">
      <Button bg={"#5784a7"} size="sm" onClick={restar}>
        -
      </Button>
      <Text fontSize="2xl" fontWeight="bold">
        {count}
      </Text>
      <Button bg={"#5784a7"} size="sm" onClick={sumar}>
        +
      </Button>
      <Button mt={2} mb={2} bg={"#5784a7"} onClick = {() => onAdd(count)}>
        Agregar al Carrito
      </Button>
    </Box>
  )
}

export default ItemCount;