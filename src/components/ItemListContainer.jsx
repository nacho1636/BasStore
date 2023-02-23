import ItemList from "./ItemList"
import Data from "../stock.json"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const {category} = useParams()
    console.log(category)



    const catFilter = Data.filter((bass) => bass.category === category);
    console.log(catFilter);

    return(
        <div>
            {category ? <ItemList basses={catFilter} /> : <ItemList basses={Data} />}
        </div>
    );
};


export default ItemListContainer;