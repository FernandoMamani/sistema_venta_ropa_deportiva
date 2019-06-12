import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/core/src/render3';
import { equal } from 'assert';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

    getProducts(): any{
      return this.db.collection('products').valueChanges();
    }
    getProductsCategoria(filtro:String):any{
      var col =this.db.collection('products').valueChanges();
      var q={ query:{
        orderByChild: 'categoria',
        equalTo: 'filtro'
      } }
      
      return col;
    }
}
