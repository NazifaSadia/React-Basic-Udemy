import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Product from './Components/Product';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
       {/* <Hello/>
       <Product/>  */}
       <ProductList/>
    </div>
  );
}

export default App;
