export default class OrderProduct {
  constructor(id, order_id, product_id, comment, quantity, price) {
    this.id = id;
    this.order_id = order_id;
    this.product_id = product_id;
    this.comment = comment;
    this.quantity = quantity;
    this.price = price;
  }
}