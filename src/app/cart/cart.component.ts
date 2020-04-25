import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address : ''
    })
  }

  ngOnInit() {
    this.items = this.cartService.getAllItems();
  }

  onSubmit(customerData){
    // send the customer data for further order processing and fulfillment
    // clear the cart and reset the checkoutForm
    window.alert("Your order has been submitted");
    console.log("Customer data --"+customerData.name); 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}