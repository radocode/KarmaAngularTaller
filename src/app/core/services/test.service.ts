import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  mandarMensajeMayusculas(msj: string) {
    try {

      return msj === 'chao' ? 'BYE' : msj.toLocaleUpperCase();
    } catch (error) {
      return 'cerveza';
    }
  }
}
