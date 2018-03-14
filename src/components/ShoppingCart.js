import React, { Component } from 'react';
import './ShoppingCart.css';
import store from '../store';
import {removeFromCart} from '../actionCreatores';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  render() {
    return (
      <div header="Shopping Cart" className="col-4">

        <div fill>

          <div>
            {this.state.cart.map(product =>
              <div key={product.id}>
                <div>{product.name}</div>
                <div className="text-right">${product.price}</div>
                <div className="text-right"><button  onClick={() => this.removeFromCart(product)}>Eliminar</button></div>
              </div>
            )}
          </div>
          <div>
            <div>
              <div colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }

  removeFromCart(product) {
    store.dispatch(removeFromCart(product));
  }
}

export default ShoppingCart;
