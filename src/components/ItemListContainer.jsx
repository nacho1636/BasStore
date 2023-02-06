import React from 'react'
import Item from './Item'


const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h2>{greeting}</h2>
            <div>
                <Item />
            </div>
        </>
    )
}

export default ItemListContainer