import React, { Component } from 'react';
import ProductList from '../ProductList';
import Order from '../Order';
import aProducts from '../../config/products';
import './App.css';

class AppComponent extends Component {
  constructor () {
    super();
    this.state = {
      order: []
    };
  }
  orders (order) {
    this.setState({order: order});
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Welcome to the Checkout</h1>
        </div>
        <div className='App-body'>
          <ProductList products={aProducts} orders={this.orders.bind(this)} />
          <Order order={this.state.order} />
        </div>
      </div>
    );
  }
}

export default AppComponent;
