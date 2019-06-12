import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoryService } from './category.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'iso-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category_products$: Observable<Product[]>;
  constructor(private categoryService: CategoryService) { }
  
  ngOnInit(): void {
    this.category_products$ = this.categoryService.getProducts();
    // this.products$.subscribe(this.products$ => console.log(products));
  }

}
