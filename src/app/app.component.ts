import { Component, OnInit } from '@angular/core';
import * as Servizi from '../app/service/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'progetto settimana 10';

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    Servizi.loadArticoli(this.http);
  }
}
