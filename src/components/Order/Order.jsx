import React, { Component } from 'react';
import './Order.css';

class OrderComponent extends Component {
  render () {
    return (
      <div className='Order'>
        <h2 className='Order-title'>Your Order</h2>
      </div>
    );
  }
}

OrderComponent.propTypes = {

};

export default OrderComponent;
