import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductsService } from './products.service';
import { Product } from '../shared/models/product';
import {CarritoFirebaseService} from '../carrito/carrito-firebase.service';
@Component({
  selector: 'iso-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService, private carritoService: CarritoFirebaseService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
    // this.products$.subscribe(this.products$ => console.log(products));
  }
  addProduct(p: Product) {
      this.carritoService.addProduct(p);
      console.log(this.carritoService.enCarrito);
  }
}
