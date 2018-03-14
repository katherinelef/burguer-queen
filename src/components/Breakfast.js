import React, { Component } from 'react';
import './Breakfast.css';
import store from '../store';
import {addToCart} from '../actionCreatores';

  class Breakfast extends Component {
    constructor() {
      super();

      this.addToCart = this.addToCart.bind(this);
  
      this.state = {
        products: [
          { id: 1, name: "Café americano", price: 5, image: "https://image.ibb.co/dORTvH/americano.png"  },
          { id: 2, name: "Café con leche", price: 7, image: "https://image.ibb.co/jOdrFH/conleche.png"  },
          { id: 3, name: "Sandw. Jamón-queso", price: 10, image: "https://image.ibb.co/bOne2x/cheese_sandwiches.jpg"  },
          { id: 4, name: "Jugo natural", price: 7, image: "https://image.ibb.co/d8oaaH/unnamed.png"},
          ]
      }
    }
  
    render() {
      return (
        <div className="col-9">
          <div>
            <h1 className="text-center m-5"> Desayuno </h1>
          </div>
          <div class="card-group ">
            {this.state.products.map(product =>
            <div class="col-3">
              <div className="card m-3"  key={product.id}>
                <img className="card-img-top" src={product.image} alt={product.name} />
                <div className="card-body">
                <h4 className="card-title text-center">{product.name}</h4>
                <h4 className="card-title text-center">S/.{product.price}</h4>
                  <p className="card-text">
                    <button className= "btn" onClick={() => this.addToCart(product)}>Comprar</button>
                  </p>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
        
      );
    }
  
    addToCart(product) {

      store.dispatch(addToCart(product));
  
    }
  }
  
  export default Breakfast;