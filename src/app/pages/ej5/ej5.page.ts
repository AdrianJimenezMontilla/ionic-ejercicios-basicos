import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej5',
  templateUrl: './ej5.page.html',
  styleUrls: ['./ej5.page.scss'],
})
export class Ej5Page implements OnInit {

  min: number = 0;
  max: number = 0;
  numero: number;

  constructor() { }

  ngOnInit() {
  }

  generaNum(): void {
  this.numero = Math.floor(Math.random() * ((this.max - this.min) +1));
  }

}

