import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Cart from "./Cart";







const checkOut = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  }

  const order = {
    name,
    email,
  }

  const orderCollection = collection(db, "orden");


  const [cart, setCart] = useContext(CartContext);
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
    <div>

      <div className='checkout'>
        <Cart />
      </div>

      <Container className="w-50">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de correo electrónico.</Form.Label>
            <Form.Control type="text" placeholder="Email" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Text className="text-muted">Nunca compartiremos tus datos con nadie.</Form.Text>

          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label></Form.Label>
            <Form.Control type="notas" placeholder="Notas" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button type="submit" variant="outline-info">Comprar</Button>
        </Form>
        <Form.Text >
          <h3>Nro. de orden: {orderId}</h3>
        </Form.Text>
      </Container>





    </div>
  )
}

export default checkOut;