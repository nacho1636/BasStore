import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ItemCount from './ItemCount';
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetail = ({ }) => {
    const { id } = useParams();
    console.log(id);


    const [bass, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const bassRef = doc(db, "bajos", `${id}`);

        getDoc(bassRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProducts(snapshot.data());
            } else {
                console.log("No existe tal dato!");
            }
        });
    }, []);


    return (
        <>
            <div key={bass.id} >
                <Container className="w-50" >
                    <Card border="info" className="text-center">
                    <Card.Img variant="top" src={bass.image} />
                    <Card.Body>
                        <Card.Title>{bass.name}</Card.Title>
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
                            <span>Precio: $ {bass.price}</span>
                        </Card.Text>
                    </Card.Body>
                    <ItemCount
                        id={bass.id}
                        image={bass.image}
                        stock={bass.stock}
                        price={bass.price}
                        name={bass.name}
                    />
                    </Card>
                </Container>
            </div>
        </>





    )
}

export default ItemDetail