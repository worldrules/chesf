import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserirplano',
  templateUrl: './inserirplano.component.html',
  styleUrls: ['./inserirplano.component.scss']
})
export class InserirplanoComponent implements OnInit {

  exigencia = false;

  mudaExigencia() {
    this.exigencia = !this.exigencia;
  // tslint:disable-next-line: align
  }
  semExigencia() {
    this.exigencia = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
