import React from 'react'
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { CartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';




const Cart = () => {
  const [cart, setCart, removeItem] = useContext(CartContext);
  console.log(cart);



  if (cart.length === 0) {
    return (
      <>
        <div className="text-center">
          <h1>Carrito vacío!!</h1>
          <Button variant="info"><Link to='/catalogue' style={{ color: 'white', textDecoration: 'none' }}>Volver al catalogo.</Link></Button>
        </div>
      </>
    )
  }

  return (
    <>

      <div className='cartItem'>
        <Container className="w-50">
          <CartItem />
        </Container>
      </div>

      <div className="text-center">
        <Container>
          <Button variant="info"><Link to='/catalogue' style={{ color: 'white', textDecoration: 'none' }}>Volver al catalogo</Link></Button>{' '}
          <Button variant="danger" onClick={removeItem}>Eliminar del carrito</Button>{' '}
          <Button variant="success" ><Link to='/checkout' style={{ color: 'white', textDecoration: 'none' }}>Finalizar compra</Link></Button>{' '}
        </Container>
      </div>

    </>
  )

}



export default Cart;