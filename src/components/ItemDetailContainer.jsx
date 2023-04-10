import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = (bass) => {
    const {id} = useParams


    // const bassFilter = bass.filter((bass) => bass.id == id)


    return <ItemDetail/ >
}

export default ItemDetailContainer;