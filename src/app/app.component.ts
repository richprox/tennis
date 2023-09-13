import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {User} from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  users: any[] = []; // Aquí almacenarás datos de usuarios
  user: any = null; // Almacena el usuario autenticado
  userName = ''; // Aquí almacenarás el nombre del usuario autenticado
  constructor(private router: Router,
              private afAuth: AngularFireAuth, private firestore: AngularFirestore,
              private authService: AuthService
              ) {}
  get userIsAuthenticated() {
    return this.userIsAuthenticated;
  }
  ngOnInit() {
    // Obtener el usuario autenticado
    this.authService.getCurrentUsers().then((user: User | null) => {
      if (user) {
        this.user = user;
        // Consultar la colección "users" filtrando por el campo "email" igual al correo electrónico del usuario autenticado
        this.firestore
          .collection('users', (ref) => ref.where('email', '==', user.email))
          .valueChanges()
          .subscribe((users: any) => {
            // users contendrá solo el usuario autenticado o estará vacío si no se encuentra
            if (users.length > 0) {
              this.user = users[0];
            } else {
              this.user = null;
            }
          });
      }
    });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
