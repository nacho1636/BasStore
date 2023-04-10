import React from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

const Item = ({ id, name, description, price, stock, image, category }) => {
    return (
        <div key={id}>
            <Container >
            <Card border="info" className="text-center">
            <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>Stock: {stock}</span>
                    </Card.Text>
                    <Card.Text>
                        <span>Cuerdas: {category}</span>
                    </Card.Text>
                    <Link to={`/item/${id}`}><Button variant="info">Detalle</Button></Link>
                </Card.Body>
            </Card>
          </Container>
        </div>
    )
}

export default Item

