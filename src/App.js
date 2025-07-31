import './App.css';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import Home from './home/Homepage.jsx';
import ProductHome from './productos/ProductHome.jsx';
import ContactPage from './contacts/ContactPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './productPage/ProductPage.jsx';

function App() {
  return (
    
      <Router>
          <Navbar />
          <div className="App">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/products" element={<ProductHome />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/products/:categoryName" element={<ProductPage />} />
            </Routes>
          </div>
          <Footer />
      </Router>

  );
}

export default App;

