import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipodeobra',
  templateUrl: './tipodeobra.component.html',
  styleUrls: ['./tipodeobra.component.scss']
})
export class TipodeobraComponent implements OnInit {

  nomeDaObra: string = '';
  catDaObra: string = '';

  tiposDeObra: string[] = ['1'];



  incluiObra() {

  }



  constructor() { }

  ngOnInit() {
  }

}
