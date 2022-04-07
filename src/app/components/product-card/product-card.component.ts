import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Articolo } from '../../models/product';
import * as Servizi from '../../service/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  articolo!: Articolo;
  sub!: Subscription;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      this.articolo = <Articolo>params;
      console.log(params);
    });
  }

  aggiungi() {
    Servizi.aggiungiAlCarrello(this.articolo);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
