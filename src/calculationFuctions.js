function productAlreadySelected (nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].id === nameKey) {
      myArray[i].quantity ++;
      return myArray[i];
    }
  }
  return false;
}
export function selectProduct (obj, list) {
  if (!productAlreadySelected(obj.id, list)) {
    obj.quantity = 1;
    list.push(obj);
  }
  for (var i = 0; i < list.length; i++) {
    if (obj.id === list[i].id) {
      if (obj.id === 'G95' && list[i].quantity > 1) {
        list[i].fullPrice = (obj.price * (list[i].quantity));
        list[i].fullPrice = '£' + list[i].fullPrice.toFixed(2);
        if (isOdd(list[i].quantity)) {
          list[i].totalPrice = (obj.price * (((list[i].quantity - 1) / 2) + 1));
          list[i].totalPrice = list[i].totalPrice.toFixed(2);
        }
      } else {
        list[i].totalPrice = (obj.price * (list[i].quantity));
        list[i].totalPrice = list[i].totalPrice.toFixed(2);
      }
    }
  }
}
function isOdd (n) {
  return Math.abs(n % 2) === 1;
}
export function subtotal (array) {
  var subtotalValue = 0;
  for (var i = 0; i < array.length; i++) {
    subtotalValue += +array[i].totalPrice;
  }
  subtotalValue = subtotalValue.toFixed(2);
  return subtotalValue;
}
export function total (array) {
  var Subtotal = subtotal(array);
  var total;
  if (Subtotal > 10) {
    total = Math.round((Subtotal - ((20 / 100) * Subtotal)) * 100) / 100;
    total = total.toFixed(2);
    return total;
  }
  return Subtotal;
}
export function containsAsparagus (element) {
  if (element.id === 'G95' && element.quantity > 1) { return true; }
}
