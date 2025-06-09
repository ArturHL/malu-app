export default class Order {
  constructor(id, client_id, date, total, status) {
    this.id = id;
    this.client_id = client_id;
    this.date = date;
    this.total = total;
    this.status = status;
  }
}