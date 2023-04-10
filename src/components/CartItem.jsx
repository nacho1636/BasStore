import React from 'react'
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { CartContext } from '../context/ShoppingCartContext';

const CartItem = () => {
    const [cart, setCart] = useContext(CartContext);

    return (

        <>
            {cart.map((item) => {
                return (

                    <div key={item.id}>
                        <Container key={item.id} className="w-50" >
                            <Card border="info" className="text-center">
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Text>
                                        <span>Precio: $ {item.price}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Cantidad: {item.quantity}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Costo parcial: $ {item.price * item.quantity}</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>

                                </Card.Footer>
                            </Card>

                        </Container>

                    </div>



                );


            })}
        </>

    )
}

export default CartItem