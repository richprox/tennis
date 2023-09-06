import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';


import {Users} from '../admin/usuarios/user.model';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private auth: Auth, private firestore: AngularFirestore, private afAuth: AngularFireAuth) {}
  get userIsAuthenticated() {

    return this.loggedIn;
  }
  static canAccessUsers(user: Users | null, route): boolean {
    // Implementa la lógica para verificar el acceso según tus criterios
    // Por ejemplo, verifica el rol del usuario
    return user?.role === 'admin'; // Ejemplo de verificación de rol
  }
  // Comprueba si el usuario tiene acceso a la ruta 'admin'
  static canAccessAdmin(user: Users | null, route): boolean {
    // Implementa la lógica para verificar el acceso según tus criterios
    // Por ejemplo, verifica el rol del usuario
    return user?.role === 'admin'; // Ejemplo de verificación de rol
  }

  async register(user: Users) {
    try{
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
        );

      // Agregar información adicional a Firestore
      const userFirebase = userCredential.user;
      await this.firestore.collection('users').doc(userFirebase.uid).set({
        email: user.email,
        age: user.age,
        address: user.address,
        role: user.role || 'cliente' // Agrega el rol del usuario (admin, cliente, etc.) si es necesario
      });
      // return user;
      return {success: true};
    } catch (e){
      return {success: false, e};
    }
  }

  async login({email, password}) {
    this.loggedIn.next(true);
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password);
      return user;
    } catch (e) {
      return null;
    }
  }
    logout() {
      return signOut(this.auth);
  }

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user); // Devuelve el usuario actual
        } else {
          resolve(null); // No hay usuario autenticado
        }
      });
    });
  }
}
