import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private auth: Auth) {}

  get userIsAuthenticated() {

    return this.loggedIn;
  }

  async register({email, password}) {
    try{
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password);
      return user;
    } catch (e){
      return null;
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
}
