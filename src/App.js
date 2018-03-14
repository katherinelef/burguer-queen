import React,  { Component }  from 'react';
import Header from './components/Header';

import './App.css';
import ProductList from './components/ProductList';
import Breakfast from './components/Breakfast';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Breakfast />
        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
