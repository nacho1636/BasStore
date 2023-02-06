import React from 'react'
import Item from './Item'


const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <div>
                <Item />
            </div>
        </>
    )
}

export default ItemListContainer