import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Contador = () => {

    const [numero, setNumero] = useState(0)


  return (
  <>
    <div>
      <span>Cantidad: {numero}</span>{' '}
    </div>
    
    <div>
        <Button variant="info" onClick={() => setNumero(numero + 1)}>+</Button>{' '}
        <Button variant="info" onClick={() => setNumero(numero - 1)}>-</Button>{' '}
        <Button variant="info" onClick={() => setNumero(0)}>Reset</Button>{' '}
    </div>
  </>)
}

export default Contador