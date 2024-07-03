import React, { useState } from 'react'

const useCounter = (initialValue, stock) => {
    const [ count, setCount ] = useState(initialValue)

    const sumar = () => {
        count < stock && setCount(count + 1)
    }
    const restar = () => {
        count > initialValue && setCount(count - 1)
    }
    return {count, sumar, restar}
}
export default useCounter
