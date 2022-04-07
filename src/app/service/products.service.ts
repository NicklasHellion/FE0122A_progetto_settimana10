import {HttpClient} from '@angular/common/http';
import{Articolo} from '../models/product'
export let articoli: Articolo[] = [];
export let carrello: Articolo[] = [];

export function aggiungiAlCarrello(articolo: Articolo) {
  console.log(articoli.indexOf(articolo));
  carrello.push(articolo);
}
export function loadArticoli(http: HttpClient): void {
  http.get('http://localhost:4201/prodotti').subscribe((res) => {
    articoli = <Articolo[]>res;
  });
}
