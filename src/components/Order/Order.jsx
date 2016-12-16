import React, { Component } from 'react';
import './Order.css';

class OrderComponent extends Component {
  constructor () {
    super();
    this.state = {
      total: 0.00,
      subtotal: 0.00,
      discountNote: '',
      buy1get1free: ''
    };
  }
  render () {
    return (
      <div className='Order'>
        <h2 className='Order-title'>Your Order</h2>
        <table className='table table-bordered'>
          <tbody id='myTable'>
            <tr className='titles'>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

OrderComponent.propTypes = {
  order: React.PropTypes.array
};

export default OrderComponent;
