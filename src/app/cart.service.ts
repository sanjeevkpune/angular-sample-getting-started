import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartService {
  items = [];
  constructor(private httpClient: HttpClient) {}

  addToCart(item) {
    this.items.push(item);
  }

  getItem(index) {
    return this.items[index];
  }

  getAllItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get("/assets/shipping.json");
  }
}
