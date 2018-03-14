import React, { Component } from 'react';
import store from '../store';


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
      <div header="Shopping Cart">
        
          <div>
            {this.state.cart.map(product =>
              <div key={product.id}>
                <div>{product.name}</div>
                <div className="text-right">${product.price}</div>
                <div className="text-right"><button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}></button></div>
              </div>
            )}
          </div>
          <tfoot>
            <div>
              <div colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </div>
            </div>
          </tfoot>
        

      </div>
    )
  }

  removeFromCart(product) {

  }
}

export default ShoppingCart;
