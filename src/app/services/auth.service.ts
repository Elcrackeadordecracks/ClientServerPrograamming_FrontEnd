import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor() { }


  authenticate(): boolean {
    return this.isLogged;
  }
}
