import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import CartScreen from './screens/CartScreen.js';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import React from 'react';
import LoginScreen from './screens/LoginScreen.js';

//arrow functions
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/cart' element={<CartScreen />} />
             </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;