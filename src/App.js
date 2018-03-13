import React,  { Component }  from 'react';
import Header from './components/Header';

import './App.css';
import ProductList from './components/ProductList';
import ShoppingCard from './components/ShoppingCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductList />
        <ShoppingCard />
      </div>
    );
  }
}

export default App;
