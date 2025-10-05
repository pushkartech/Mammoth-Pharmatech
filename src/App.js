import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/productsPage" Component={ProductsPage}/>
        <Route path="/products/:section/:id" Component={ProductDetails}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
