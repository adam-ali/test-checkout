import React, { Component } from 'react';
import ProductComponent from '../Product';
import Product from '../../models/Product';
import './ProductList.css';

class ProductListComponent extends Component {
  callOrderFunc (orderData) {
    this.props.orders(orderData);
  }
  render () {
    return (
      <div className='ProductList'>
        <h2 className='ProductList-title'>Our Products</h2>
        {this.props.products.map(x =>
          <ProductComponent product={x} key={x.code} callOrder={this.callOrderFunc.bind(this)} />
        )}
      </div>
    );
  }
}

ProductListComponent.propTypes = {
  products: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(Product)
  ),
  orders: React.PropTypes.func
};

export default ProductListComponent;
