import { Component } from '@angular/core';
import {CarritoFirebaseService} from '../../carrito/carrito-firebase.service';

@Component({
  selector: 'iso-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(public carritoService: CarritoFirebaseService) {
    }
}
