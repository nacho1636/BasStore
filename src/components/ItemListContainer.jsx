import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

    const [bass, setBasses] = useState([]);
    const { category } = useParams();


    useEffect(() => {
        const db = getFirestore();

        const bassesCollection = collection(db, "bajos");
        getDocs(bassesCollection).then((snapshot) => {
            const doc = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setBasses(doc);
        });
    }, []);

    const catFilter = bass.filter((bass) => bass.category === category);
    console.log(bass);




    return (
        <div>
            {category ? <ItemList bass={catFilter} /> : <ItemList bass={bass} />}
        </div>
    );
    
};


export default ItemListContainer;