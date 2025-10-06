import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./pages/ProductDetails";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
    <ScrollToTop/>
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

// our principals to written with the About section

export default App;
