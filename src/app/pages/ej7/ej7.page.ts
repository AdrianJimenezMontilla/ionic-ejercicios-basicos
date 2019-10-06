import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej7',
  templateUrl: './ej7.page.html',
  styleUrls: ['./ej7.page.scss'],
})
export class Ej7Page implements OnInit {

  pes: number = 0;
  eur: number = 0;

  constructor() { }

  ngOnInit() {
  }

  cambioPes() {
    this.eur = this.pes / 166.386;

  }

  cambioEur() {
    this.pes = this.eur * 166.386;

  }

}