import React, { Component } from 'react';
import Product from '../../models/Product';
import './Product.css';

class ProductComponent extends Component {
  sendOrderData () {
    var name = this.props.product.name;
    var age = this.props.product.getFormattedPrice();
    var id = this.props.product.code;

    console.log(name, age, id);
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
