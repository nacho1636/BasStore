import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = () => {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="https://www.ecomusicweb.com/wp-content/uploads/2018/09/preview_1.jpg" />
      <Card.Body>
        <Card.Title>Fender Precision Bass</Card.Title>
        <Card.Text>
          <h4>Características</h4>
          Cuerpo de aliso con acabado brillante.
          Una pastilla Split-coil de la Serie Player en el centro.Control máster de volumen y tono.
          Mástil con perfil "C moderna".
          Diapasón con radio de 9,5”
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
