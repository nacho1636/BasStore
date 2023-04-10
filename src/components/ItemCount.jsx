import { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, id, price, name, image }) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(1);

    const addQty = () => {
        setCount(count + 1);
    };

    const redQty = () => {
        setCount(count - 1);
    };



    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + count };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { id, quantity: count, price, name }];
            }
        });
    };


    return (
        <>
            <div>
                {count < stock ? (<Button variant="info" onClick={addQty}>+</Button>) : (<Button variant="info" isdisabled="true" />)}

                <Button variant="info" onClick={() => addToCart()}>Agregar al carrito: {count}</Button>

                {count < 1 ? (<Button variant="info" isdisabled="true" />) : (<Button variant="info" onClick={redQty}>-</Button>)}
            </div>
        </>
    );

};

export default ItemCount;

