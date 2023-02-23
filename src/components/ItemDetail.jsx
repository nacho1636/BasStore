import React from 'react';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Contador from "./Contador";


const ItemDetail = ({ basses }) => {
    const { id } = useParams();
    console.log(id);


    const bassFilter = basses.filter((bass) => bass.id == id);


    return (
        <>
            {bassFilter.map((bass) => (
                <div key={bass.id}>

                    <Container fluid>
                        <Card className="text-center" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bass.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{bass.title}</Card.Title>
                                <Card.Text>
                                    <span>Stock: {bass.stock}</span>
                                </Card.Text>
                                <Card.Text>
                                    <span>Cuerdas: {bass.category}</span>
                                </Card.Text>
                                <Card.Text>
                                    <span>Descripción: {bass.description}</span>
                                </Card.Text>
                                <Card.Text>
                                    <span>Precio: $ {bass.precio}</span>
                                </Card.Text>
                            </Card.Body>
                            <Contador />
                        </Card>
                    </Container>
                </div>

            ))}
        </>
    )
}

export default ItemDetail