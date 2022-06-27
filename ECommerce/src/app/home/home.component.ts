import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productservice: ProductService,private cartService : CartService) { }

  public products : any ; 
  ngOnInit(): void {

    this._productservice.getProducts().subscribe(res => this.products = res, err => console.log(err))
  }
  addtocart(product: any){
    this.cartService.addtoCart(product);
   }
}