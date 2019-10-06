import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.page.html',
  styleUrls: ['./ej1.page.scss'],
})
export class Ej1Page implements OnInit {

  nombre: string ="";

  constructor() { }

  ngOnInit() {
    this.reset();
  }
  reset(): void {
    this.nombre = "";
  }
  muestraNombre(): void {
    this.nombre = "Adrian Jimenez Montilla"
  }

}
