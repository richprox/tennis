import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

import { Users } from '../admin/usuarios/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import {Observable} from 'rxjs';

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
    return user?.role === 'admin';
  }

  static canAccessAdmin(user: Users | null, route): boolean {
    return user?.role === 'admin';
  }

  async register(user: Users) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.password
      );

      const userFirebase = userCredential.user;
      await this.firestore.collection('users').doc(userFirebase.uid).set({
        displayName: user.name,
        email: user.email,
        age: user.age,
        address: user.address,
        role: user.role || 'cliente'
      });

      return { success: true };
    } catch (e) {
      return { success: false, e };
    }
  }

  async login({ email, password }) {
    this.loggedIn.next(true);
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
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
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  }

  async getActiveUser(): Promise<User | null> {
    try {
      return await this.afAuth.currentUser;
    } catch (error) {
      console.error('Error fetching current user:', error);
      return null; // Handle errors gracefully
    }
  }

  async getCurrentUserName() {
    try {
      const user = await this.getCurrentUser();
      if (user) {
        const displayName = user.displayName;
        return displayName;
      }
      return null;
    } catch (error) {
      console.error('Error fetching current user:', error);
      return null;
    }
  }

  // Método para obtener la lista de usuarios registrados
  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }


  getCurrentUsers(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        resolve(user); // Devuelve el usuario actual o null si no hay sesión activa
      });
    });
  }
}

