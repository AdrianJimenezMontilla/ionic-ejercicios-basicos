import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej6',
  templateUrl: './ej6.page.html',
  styleUrls: ['./ej6.page.scss'],
})
export class Ej6Page implements OnInit {

  position = 1;

  constructor() { }

  ngOnInit() {
  }

  incPosition() {
    this.position++;
  }
}