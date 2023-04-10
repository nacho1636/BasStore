import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Button from "react-bootstrap/Button";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);





  return (
    <>
      <div className="cart">
        <Button size="md" variant="light">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{quantity}</span>
        </Button>
      </div>
    </>
  )
}

export default CartWidget