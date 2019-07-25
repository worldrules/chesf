import { Component, OnInit } from '@angular/core';
import { Geral } from '../../../_infra/_model/aviso-licitacao/geral';

import * as moment from 'moment/moment';
import { GeralService } from '../../../_infra/_services/aviso-licitacao/geral.service';
declare var $;

@Component({
  selector: 'app-detalhesgeral',
  templateUrl: './detalhesgeral.component.html',
  styleUrls: ['./detalhesgeral.component.scss']
})
export class DetalheGeralComponent implements OnInit {
  

  geral: Geral = null;
  login = false;
  logado = false;
  erro: any;
  nroEdital: number;
  carregando: boolean;
  publicacao: boolean = false;

  /* salvaDataLicitacao = new SalvaDataLicitacao; */

  arquivo: boolean = false;

  constructor(private geralService: GeralService) { }

  ngOnInit() {
    this.geral = new Geral;
    $('#modalDetalhesGeral').on('shown.bs.modal', event => {
      this.carregaGeralDetalhes();
    });

    if (localStorage.getItem('currentFornecedor') != null) {
      this.logado = true;
    }
    else {
      this.logado = false;
    }
  }

  carregaGeralDetalhes() {
    this.geral = new Geral;
    var id = $("#idDetalhesGeral").val();

    this.geralService.getDetalhes(id)
      .subscribe(data => {
        this.geral = data;
        this.geral.cargo = 'Suely Kummer da Rocha';
        this.geral.responsavel = 'Gerente do Departamento de Contratação de Empreendimentos - DEEC - Em Exercício';
      },
        error => {
          this.erro = error;
          this.carregando = false;
        }
      )
  }

  datePipe(value: any, ...args: any[]) {
    return moment(value).format('YYYY-MM-DD');
  }

  mostrar() {
    if (!this.publicacao) {
      $("#mostrar").removeClass("ti-angle-down");
      $("#mostrar").addClass("ti-angle-up");

      this.publicacao = true;
    } else {
      $("#mostrar").removeClass("ti-angle-up");
      $("#mostrar").addClass("ti-angle-down");

      this.publicacao = false;
    }
  }
  carregaNumeroEdial() {
    let numeroEdital = $("#idDetalhesGeral").val();
    return numeroEdital;
  }
  cadastrarDataLicitacao() {

    let data = $("#dataLicitacao").val();
    data = this.datePipe(data);
    this.nroEdital = this.carregaNumeroEdial();

    /* this.salvaDataLicitacao.dataLicitacao = data;
    this.salvaDataLicitacao.nroEdital = this.nroEdital;

    this.emConfiguracaoService.salvaDataLicitacao(this.salvaDataLicitacao).subscribe(); */
  }
  expandirArquivos() {
    if (!this.arquivo) {
      $("#expandirArquivos").removeClass("ti-angle-down");
      $("#expandirArquivos").addClass("ti-angle-up");

      this.arquivo = true;
    } else {
      $("#expandirArquivos").removeClass("ti-angle-up");
      $("#expandirArquivos").addClass("ti-angle-down");

      this.arquivo = false;
    }
  }

}
