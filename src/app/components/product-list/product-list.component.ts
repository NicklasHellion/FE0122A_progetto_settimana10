import { Component, OnInit } from '@angular/core';
import { Articolo } from "../../models/product";
import { HttpClient } from "@angular/common/http";
import * as Servizi from "../../service/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  articoliNegozio: Articolo[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    setInterval(() => {
      if (this.articoliNegozio != []) {
        this.isLoading = false;
      }
      this.articoliNegozio = Servizi.articoli;
    }, 2000);
  }
}
