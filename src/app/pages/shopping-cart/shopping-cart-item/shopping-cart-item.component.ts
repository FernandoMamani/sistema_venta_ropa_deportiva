import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../../models/product';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartComponentItem implements OnInit {
  
    @Input() product: Product;
    profileUrl: Observable<string | null>;
    
    constructor(private storage: AngularFireStorage) { }

    ngOnInit() {
      const ref = this.storage.ref(`https://www.championstore.com/wcsstore/HanesEuropeCAS/images/product/full/SS19/CHPEU_212790_KK001_Full.jpg`);
        this.profileUrl = ref.getDownloadURL();
    }

}
