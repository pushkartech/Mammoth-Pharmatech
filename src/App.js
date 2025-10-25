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
    // allow DOM to render first
    const tick = setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          // compute navbar height from CSS variable (fallback to 80)
          const styles = getComputedStyle(document.documentElement);
          const navHeightRaw = styles.getPropertyValue("--navbar-height") || "80px";
          const navHeight = parseInt(navHeightRaw.trim(), 10) || 80;
          // small extra offset
          const offset = 12; // matches CSS breathing room
          // compute absolute top of element then subtract navbar height
          const elTop = el.getBoundingClientRect().top + window.pageYOffset;
          const target = Math.max(0, elTop - navHeight - offset);

          window.scrollTo({ top: target, behavior: "smooth" });
          return;
        }
      }

      // default: scroll to top of the page for path changes (no hash)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 60); // short delay to ensure layout/render

    return () => clearTimeout(tick);
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
