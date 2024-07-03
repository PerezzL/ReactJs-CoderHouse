import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, sumar, restar } = useCounter(initialValue, stock)

  return (
    <div>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount