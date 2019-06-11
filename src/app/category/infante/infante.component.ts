import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../category.service';
import { Product } from '/home/elizabeth/Escritorio/sistema_venta_ropa_deportiva/src/app/shared/models/product';

@Component({
  selector: 'iso-infante',
  templateUrl: './infante.component.html',
  styleUrls: ['./infante.component.css']
})
export class InfanteComponent implements OnInit {
  category_products$: Observable<Product[]>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category_products$ = this.categoryService.getProducts();
  }

}
