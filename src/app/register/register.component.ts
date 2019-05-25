import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'iso-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private db: AngularFirestore) {
    
  }
      /*getProducts(): any{
        return this.db.collection('products').valueChanges();
      }*/
  ngOnInit() {
  }
   //Crea un nuevo gato
  public register(data: {nombre: string, url: string}) {
    return this.db.collection('cats').add(data);
  }

}
