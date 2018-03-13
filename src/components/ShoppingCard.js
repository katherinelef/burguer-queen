import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

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
  }

  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <div>
            {this.state.cart.map(product =>
              <div key={product.id}>
                <div>{product.name}</div>
                <div className="text-right">${product.price}</div>
                <div className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></div>
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
        </Table>

      </Panel>
    )
  }

  removeFromCart(product) {

  }
}

export default ShoppingCart;
