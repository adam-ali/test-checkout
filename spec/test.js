/* global describe it */
import * as calculate from '../src/calculationFuctions';
var assert = require('chai').assert;

describe('calculation functions', () => {
  var apple = {id: 'a1', name: 'apple', price: 1.20};
  var asparagus = {id: 'G95', name: 'Asparagus', price: 1.20};
  var banana = {id: 'G94', name: 'banana', price: 0.2};
  var melon = {id: 'G93', name: 'melon', price: 5.20};
  it('select product adds one item to the array', () => {
    var actual = [];
    calculate.selectProduct(apple, actual);
    var ordersArray = {id: 'a1', name: 'apple', price: 1.20, totalPrice: '1.20', quantity: 1};
    const expected = [ordersArray];

    assert.deepEqual(actual, expected);
  });

  it('reducer works for new product with quantity 2', () => {
    const actual = [];
    calculate.selectProduct(apple, actual);
    calculate.selectProduct(apple, actual);
    var ordersArray = {id: 'a1', name: 'apple', price: 1.20, quantity: 2, totalPrice: '2.40'};
    const expected = [ordersArray];

    assert.deepEqual(actual, expected);
  });

  it('reducer should give normal price when 1 Asparagus is  selected', () => {
    const actual = [];
    calculate.selectProduct(asparagus, actual);
    var ordersArray = {id: 'G95', name: 'Asparagus', quantity: 1, price: 1.20, totalPrice: '1.20'};
    const expected = [ordersArray];

    assert.deepEqual(actual, expected);
  });

  it('reducer should give one free when 2 Asparagus are  selected', () => {
    const actual = [];
    calculate.selectProduct(asparagus, actual);
    calculate.selectProduct(asparagus, actual);
    var ordersArray = {id: 'G95', name: 'Asparagus', price: 1.20, quantity: 2, totalPrice: '1.20', fullPrice: '£2.40'};
    const expected = [ordersArray];

    assert.deepEqual(actual, expected);
  });

  it('reducer should give one free when 3 Asparagus are  selected', () => {
    const actual = [];
    calculate.selectProduct(asparagus, actual);
    calculate.selectProduct(asparagus, actual);
    calculate.selectProduct(asparagus, actual);
    var ordersArray = {id: 'G95', name: 'Asparagus', price: 1.20, quantity: 3, totalPrice: '2.40', fullPrice: '£3.60'};
    const expected = [ordersArray];

    assert.deepEqual(actual, expected);
  });
  it('reducer should add 3 different items to the state when they are  selected', () => {
    const actual = [];
    calculate.selectProduct(apple, actual);
    calculate.selectProduct(banana, actual);
    calculate.selectProduct(melon, actual);
    var ordersArray1 = {id: 'a1', name: 'apple', price: 1.20, quantity: 1, totalPrice: '1.20'};
    var ordersArray2 = {id: 'G94', name: 'banana', price: 0.20, quantity: 1, totalPrice: '0.20'};
    var ordersArray3 = {id: 'G93', name: 'melon', price: 5.20, quantity: 1, totalPrice: '5.20'};

    const expected = [ordersArray1, ordersArray2, ordersArray3];

    assert.deepEqual(actual, expected);
  });
  it('reducer should add 2 different items to the state when 3 items are selected but one is selected twice', () => {
    const actual = [];
    calculate.selectProduct(apple, actual);
    calculate.selectProduct(banana, actual);
    var ordersArray1 = {id: 'a1', name: 'apple', price: 1.20, quantity: 1, totalPrice: '1.20'};
    var ordersArray2 = {id: 'G94', name: 'banana', price: 0.20, quantity: 1, totalPrice: '0.20'};
    const expected = [ordersArray1, ordersArray2];

    assert.deepEqual(actual, expected);
  });
});
