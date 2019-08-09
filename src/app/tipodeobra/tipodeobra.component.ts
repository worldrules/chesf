import { Component, OnInit } from '@angular/core';
import { Obra } from '../_infra/_model/obra';

@Component({
  selector: 'app-tipodeobra',
  templateUrl: './tipodeobra.component.html',
  styleUrls: ['./tipodeobra.component.scss']
})
export class TipodeobraComponent implements OnInit {

  obraArray: Obra[] = [
    {id: 1, descricao: 'Caixaria'},
  ];

  obraSelecionada: Obra = new Obra();

  addOrEdit() {
    if (this.obraSelecionada.id === 0) {
      this.obraSelecionada.id = this.obraArray.length + 1;
      this.obraArray.push(this.obraSelecionada);
    }
    this.obraSelecionada = new Obra();
  }

  editar(item: Obra) {
    this.obraSelecionada = item;
  }

  excluir() {
   if (confirm('Tem certeza que deseja excluir o item ?')) {
    this.obraArray = this.obraArray.filter(item => item !== this.obraSelecionada);
    this.obraSelecionada = new Obra();
   }
  }
  novoItem() {
    this.obraSelecionada = new Obra();
   }



  constructor() { }

  ngOnInit() {
  }

}
