import { Component, OnInit } from '@angular/core';
import { carrello } from 'src/app/service/products.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lunghezzaCarrello = carrello;
  constructor() { }

  ngOnInit(): void {
  }

}
