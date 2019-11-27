import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  mandarMensajeMayusculas(msj: string) {
    return msj === 'chao' ? 'BYE' : msj.toLocaleUpperCase();
  }
}
