// App.js
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./pages/ProductDetails";

/**
 * ScrollToTop: when pathname OR hash changes
 * - if there's a hash (e.g. /#about) try to scroll to that element id
 * - otherwise scroll to top
 */
function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    // allow the page to render before scrolling to element
    if (hash) {
      const id = hash.replace('#', '');
      // small timeout to allow DOM to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // offset fix: if navbar overlaps, you can also use window.scrollBy
          // window.scrollBy(0, -80);
        } else {
          // fallback: jump to top if not found
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* main content gets top padding via CSS so fixed navbar doesn't overlap */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/products/:section/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
