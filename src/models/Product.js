class Product {
  /**
   * @param {string} code - unique product code
   * @param {string} name - user-facing name
   * @param {number} price - represented as an integer of pennies
   */
  constructor (code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }

  getFormattedPrice () {
    return (this.price / 100).toFixed(2);
  }
}

export default Product;
