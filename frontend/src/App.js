
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { useState } from 'react';




function App() {
const [cartItem , setCartItem] = useState([])

 return(
     <div className='App'>
        <Router>
            <Header cartItem={cartItem}/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/search" element={<Home />} /> 
                <Route path='/product/:id' element ={<ProductDetails cartItem = {cartItem} setCartItem ={setCartItem} />} />
                <Route path='/cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem}/>}/>

               

            </Routes>
        <Footer/>
        </Router>

    </div>
 );
}

export default App;
