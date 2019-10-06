import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej3',
  templateUrl: './ej3.page.html',
  styleUrls: ['./ej3.page.scss'],
})
export class Ej3Page implements OnInit {

  numero: number = 0 ;

  constructor() { }

  ngOnInit() {
  }

  modValue(n): void{
    this.numero += n;
  }

  reset (): void{
    this.numero = 0;
  }

}

