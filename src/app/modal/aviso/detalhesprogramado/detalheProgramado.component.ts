import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../../_infra/_services/modal.service';
import { Programado } from '../../../_infra/_model/aviso-licitacao/programado';
import { ProgramadoService } from '../../../_infra/_services/aviso-licitacao/programado.service';
import * as moment from 'moment/moment';

declare var $;

@Component({
  selector: 'app-detalhesprogramado',
  templateUrl: './detalhesprogramado.component.html',
  styleUrls: ['./detalhesprogramado.component.scss']
})
export class DetalheProgramadoComponent implements OnInit {
  

  programado: Programado = null;
  login = false;
  logado = false;
  erro: any;
  nroEdital: number;
  carregando: boolean;
  publicacao: boolean = false;

  /* salvaDataLicitacao = new SalvaDataLicitacao; */

  arquivo: boolean = false;

  constructor(private programadoService: ProgramadoService) { }

  ngOnInit() {
    this.programado = new Programado;
    $('#modalDetalhesProgramado').on('shown.bs.modal', event => {
      this.carregaProgramadoDetalhes();
    });

    if (localStorage.getItem('currentFornecedor') != null) {
      this.logado = true;
    }
    else {
      this.logado = false;
    }
  }

  carregaProgramadoDetalhes() {
    this.programado = new Programado;
    var id = $("#idDetalhesProgramado").val();

    this.programadoService.getDetalhes(id)
      .subscribe(data => {
        this.programado = data;
        this.programado.cargo = 'Suely Kummer da Rocha';
        this.programado.responsavel = 'Gerente do Departamento de Contratação de Empreendimentos - DEEC - Em Exercício';
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
    let numeroEdital = $("#idDetalhesProgramado").val();
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
