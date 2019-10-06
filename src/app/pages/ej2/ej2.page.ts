import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2',
  templateUrl: './ej2.page.html',
  styleUrls: ['./ej2.page.scss'],
})
export class Ej2Page implements OnInit {


  nombre: string = "";
  mensaje: string = "Muestra nombre";
  constructor() { }

  ngOnInit() {
  }
  reset(): void {
    this.mensaje = "Muestra nombre";
    this.nombre = "";

  }

  muestraNombre(): void {
    if (this.mensaje == "Muestra nombre") {
      this.nombre = "Adrian Jimenez Montilla";
      this.mensaje = "Limpia pantalla";
    } else {
      this.reset(); 
    }


  }

}


