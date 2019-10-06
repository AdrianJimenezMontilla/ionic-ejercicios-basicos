import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej4',
  templateUrl: './ej4.page.html',
  styleUrls: ['./ej4.page.scss'],
})
export class Ej4Page implements OnInit {

  nombre: string;
  saludo: string;

  constructor() { }

  ngOnInit() {
  }


  saludar(): void {
    this.saludo = "¡Hola " + this.nombre + "!";
  }

}

