import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./components/Bienvenida";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";




const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Bienvenida />} />
                <Route exact path="/catalogue" element={<ItemListContainer />} />
                <Route exact path="/category/:category" element={<ItemListContainer />} />

                <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>

                

        </BrowserRouter>
    );
};

export default App;