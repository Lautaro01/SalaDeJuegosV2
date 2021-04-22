
import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(private _e : AngularFireAuth) { }

  crearUsuario(usuario : string , contraseña : string)
  {

    // console.log(usuario  + " " + contraseña);

    return this._e.createUserWithEmailAndPassword(usuario,contraseña);
  }
}
