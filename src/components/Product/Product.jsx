import React, { Component } from 'react';
import Product from '../../models/Product';
import * as calculate from '../../calculationFuctions';
import './Product.css';
var ordersList = [];

class ProductComponent extends Component {
  sendOrderData () {
    var orderObj;
    if (this.props.product.code === 'G95') {
      orderObj = {id: this.props.product.code, name: this.props.product.name, price: this.props.product.getFormattedPrice(), offer: 'Buy 1 get 1 free'};
    } else {
      orderObj = {id: this.props.product.code, name: this.props.product.name, price: this.props.product.getFormattedPrice()};
    }

    calculate.selectProduct(orderObj, ordersList);
    this.props.callOrder(ordersList);
    console.log(ordersList);
  }
  render () {
    return (
      <div className='Product' onClick={this.sendOrderData.bind(this)}>
        <div className='Product-name'>
          {this.props.product.name}
        </div>
        <div className='Product-price'>
          £{this.props.product.getFormattedPrice()}
        </div>
      </div>
    );
  }
}

ProductComponent.propTypes = {
  product: React.PropTypes.instanceOf(Product)
};

export default ProductComponent;
