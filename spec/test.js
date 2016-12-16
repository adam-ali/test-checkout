/* global describe it */
import * as calculate from '../src/calculationFuctions';
var assert = require('chai').assert;

describe('calculation functions', () => {
  var apple = {id: 'a1', name: 'apple', price: 1.20};
  var asparagus = {id: 'G95', name: 'Asparagus', price: 1.20};

  it('select product adds one item to the array', () => {
    var actual = [];
    calculate.selectProduct(apple, actual);
    var ordersArrayContent = {id: 'a1', name: 'apple', price: 1.20, totalPrice: '1.20', quantity: 1};
    const expected = [ordersArrayContent];

    assert.deepEqual(actual, expected);
  });

  it('reducer works for new product with quantity 2', () => {
    const actual = [];
    calculate.selectProduct(apple, actual);
    calculate.selectProduct(apple, actual);
    var ordersArrayContent = {id: 'a1', name: 'apple', price: 1.20, quantity: 2, totalPrice: '2.40'};
    const expected = [ordersArrayContent];

    assert.deepEqual(actual, expected);
  });

  it('reducer should give normal price when 1 Asparagus is  selected', () => {
    const actual = [];
    calculate.selectProduct(asparagus, actual);
    var ordersArrayContent = {id: 'G95', name: 'Asparagus', quantity: 1, price: 1.20, totalPrice: '1.20'};
    const expected = [ordersArrayContent];

    assert.deepEqual(actual, expected);
  });

  it('reducer should give one free when 2 Asparagus are  selected', () => {
    const actual = [];
    calculate.selectProduct(asparagus, actual);
    calculate.selectProduct(asparagus, actual);
    var ordersArrayContent = {id: 'G95', name: 'Asparagus', price: 1.20, quantity: 2, totalPrice: '1.20', fullPrice: '£2.40'};
    const expected = [ordersArrayContent];

    assert.deepEqual(actual, expected);
  });
});
