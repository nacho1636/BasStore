import React from "react";
import Data from "../stock.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {


    return <ItemDetail basses={Data} />
}

export default ItemDetailContainer;