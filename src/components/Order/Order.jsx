import React, { Component } from 'react';
import './Order.css';
import * as calculate from '../../calculationFuctions';

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
  componentWillReceiveProps (nextProps) {
    var subtotal = calculate.subtotal(nextProps.order);
    var total = calculate.total(nextProps.order);
    if (nextProps.order.find(calculate.containsAsparagus)) {
      this.setState({
        buy1get1free: '• Buy one get one free on the Asparagus'
      });
    }
    if (subtotal > 10) {
      this.setState({
        discountNote: '• 20% discount when you send more than £10.00',
        total: total,
        subtotal: subtotal
      });
    } else {
      this.setState({
        total: total,
        subtotal: subtotal
      });
    }
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
            {this.props.order.map((x, i) =>
              <tr key={i}>
                <th>{x.name}
                  <div className='offer'>{ x.offer}</div>
                </th>
                <th>£{x.price}</th>
                <th>{x.quantity}</th>
                <th>
                  <strike className='priceWithoutDiscount'>{x.fullPrice}</strike>
                  £{x.totalPrice}
                </th>
              </tr>
            )}
          </tbody>
        </table>
        <div className='row bill'>
          <h3 className='right'>Subtotal: £{this.state.subtotal}</h3>
        </div>
        <div className='row bill'>
          <h3 className='right'><div className='left'>Discount: <div>{this.state.discountNote}</div> <div>{this.state.buy1get1free}</div></div></h3>
        </div>
        <div className='row bill'>
          <h3 className='right total'>Total: £{this.state.total}</h3>
        </div>
      </div>
    );
  }
}

OrderComponent.propTypes = {
  order: React.PropTypes.array
};

export default OrderComponent;
