
import {Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage implements OnInit{

  public pages = [
    { title: 'Dashboard', url: '/home/tabs/admin/dashboard', icon: 'home' },
    { title: 'Membresias', url: '/home/tabs/admin/membresias', icon: 'card' },
    { title: 'Canchas', url: '/home/tabs/admin/canchas', icon: 'football' },
    { title: 'Usuarios', url: '/home/tabs/admin/usuarios', icon: 'people' },
    { title: 'Reservas', url: '/home/tabs/admin/reservas', icon: 'people' },
  ];

  constructor() {}

  ngOnInit() {}
}

