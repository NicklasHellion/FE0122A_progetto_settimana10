import { Component, OnInit } from '@angular/core';
import { Articolo } from '../../models/product';
import * as Servizi from '../../service/products.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  articoliCarrello: Articolo[] = Servizi.carrello;
  @ViewChild('f', { static: true }) form!: NgForm;
  user: any = {};

  submit() {
    this.user.nome = this.form.value.userInfo.nome;
    this.user.cognome = this.form.value.userInfo.cognome;
    this.user.indirizzo = this.form.value.userInfo.indirizzo;
    this.user.password=this.form.value.userInfo.password;

    let riepilogo = [];

    for (let i of this.articoliCarrello) {
      riepilogo.push(i.name);
    }
    window.prompt("Inserisci la tua password per confermare il seguente ordine: \n" +'Numero Ordine: ' +Math.ceil(Math.random() * 10000000) +'\n' + 'Nome: ' +this.user.nome +'\n'+ 'Cognome: ' +this.user.cognome +'\n' +'Indirizzo: ' + this.user.indirizzo +'\n' + riepilogo );

    Servizi.carrello.length = 0;
    this.form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
