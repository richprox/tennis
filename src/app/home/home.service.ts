import { Injectable } from '@angular/core';
import { Cancha } from './cancha.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _canchas: Cancha[] = [
    new Cancha(
      'c1',
      'Cancha 1',
      'Cancha racketball',
      '../../assets/instalaciones2.jpg',
      200
    )
  ];

  get canchas() {
    return [...this._canchas];
  }

  constructor() { }

  // getCancha(id: string){
  //   return{...this._canchas.find(c => c.id === id)};
  // }
}
