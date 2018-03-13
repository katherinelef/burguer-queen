import React, { Component } from 'react';
import './ProductList.css';


 
  class ProductList extends Component {
    constructor() {
      super();

      this.addToCart = this.addToCart.bind(this);
  
      this.state = {
        products: [
          { id: 1, name: "Simple res", price: 10, image: "https://image.ibb.co/gsFbhx/carne.jpg"  },
          { id: 2, name: "Simple pollo", price: 10, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg"  },
          { id: 3, name: "Simple vegetariana", price: 10, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
          { id: 4, name: "Doble res", price: 15, image: "https://image.ibb.co/gsFbhx/carne.jpg"},
          { id: 5, name: "Doble pollo", price: 15, image: "https://image.ibb.co/e3pK2x/hamburguesa.jpg" },
          { id: 6, name: "Doble vegetariana", price: 15, image: "https://image.ibb.co/fA1Ghx/vegetariana.jpg"  },
          { id: 5, name: "Papas fritas", price: 5, image: "https://image.ibb.co/cmYwhx/papas_fritas.jpg" },
          { id: 6, name: "Onion Rings", price: 5, image: "https://image.ibb.co/eyDwhx/cebolla.jpg"  },
          { id: 6, name: "Agua", price: 5, image: "https://image.ibb.co/hqTXpc/agua.jpg" },
          { id: 6, name: "Gaseosa", price: 7, image: "https://image.ibb.co/eYRMFH/gaseosa.jpg"  },
        ]
      }
    }
  
    render() {
      return (
        <div class="card-group">
          {this.state.products.map(product =>
            <div className="card"  key={product.id}>
              <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">
                <button onClick={() => this.addToCart(product)}  disabled={product.inventory <= 0}>S/.{product.price} </button>
            </p>
          </div>
          </div>
          )}
        </div>
      );
    }
  
    addToCart(product) {
  
    }
  }
  
  export default ProductList;