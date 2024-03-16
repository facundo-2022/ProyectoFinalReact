import React from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { NotFound } from './components/NotFound';
import { CarritoProvider } from './context/CartContext.jsx';
import { Footer } from './components/Footer'
import { Contacto } from './components/Contacto';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
export const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:pid' element={<ItemDetailsContainer />} />
          <Route path='/Contacto' element={<Contacto/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        
          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer/>
      </CarritoProvider>
    </BrowserRouter>
  );
};
