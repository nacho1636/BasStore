import React from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ id, title, description, precio, stock, thumbnailUrl, category }) => {
    return (
        <div key={id}>

            <Card>
                <Card.Img variant="top" src={thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <span>Stock: {stock}</span>
                    </Card.Text>
                    <Card.Text>
                        <span>Cuerdas: {category}</span>
                    </Card.Text>
                    <Link to={`/item/${id}`}><Button variant="primary">Ver más</Button></Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item





