import { Component, OnInit } from '@angular/core';
import {AvatarService} from '../../services/avatar.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {HomeService} from '../home.service';
import {Cancha} from '../cancha.model';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{

  loadedCanchas: Cancha[];
  component: any;
  profile = null;

  startDate = new Date(1990, 0, 1);

  constructor(
    private homeService: HomeService,
    private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadedCanchas = this.homeService.canchas;
  }
  // this.avatarService.getUserProfile().subscribe((data) => {
  //   this.profile = data;
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async changeImage() {

  }

}
