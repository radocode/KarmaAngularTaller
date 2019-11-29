import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  mandarMensajeMayusculas(msj: string) {
    try {

      return msj === 'chao' ? 'BYE' : msj.toLocaleUpperCase();
    } catch (error) {
      return 'cerveza';
    }
  }

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(
        map(response => response[1])
      );
  }
}
