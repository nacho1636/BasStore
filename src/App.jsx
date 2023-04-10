import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./components/Bienvenida";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import CheckOut from "./components/CheckOut";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"





const App = () => {
    return (
        <BrowserRouter>
            <ShoppingCartProvider>
            <NavBar />
                <Routes>
                    <Route exact path="/" element={<Bienvenida />} />
                    <Route exact path="/catalogue" element={<ItemListContainer />} />
                    <Route exact path="/category/:category" element={<ItemListContainer />} />

                    <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<CheckOut />} />
                </Routes>



            </ShoppingCartProvider>
        </BrowserRouter>
    );
};

export default App;