class CartService {
  constructor(items) {
    this.items = items;
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    total += total * 0.11;
    return total;
  }
}
