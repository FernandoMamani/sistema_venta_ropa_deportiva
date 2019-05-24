import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Product} from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class CarritoFirebaseService {
    enCarrito: Product[] = [];
 
   constructor(private db: AngularFirestore) {
    
  }
  getProducts(): any{
    return this.db.collection('products').valueChanges();
  }
  addProduct(p: Product): void {
      this.enCarrito.push(p);
  }
  getProductOnCarrito(): Product[] {
      return this.enCarrito;
  }
}
