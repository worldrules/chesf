import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../../_infra/_services/modal.service';
import Swal from 'sweetalert2';

import * as moment from 'moment/moment';
import { EmConfiguracaoService } from '../../../_infra/_services/aviso-licitacao/em.configuracao.service';
import { EmConfiguracao } from '../../../_infra/_model/aviso-licitacao/emconfiguracao/em.configuracao';
import { empty } from 'rxjs';
import { SalvaDataLicitacao } from '../../../_infra/_model/aviso-licitacao/emConfiguracao/salvadatalicitacao';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

declare var $;

@Component({
  selector: 'app-detalhesconfiguracao',
  templateUrl: './detalhesconfiguracao.component.html',
  styleUrls: ['./detalhesconfiguracao.component.scss']
})
export class DetalheConfiguracaoComponent implements OnInit {

  emConfiguracao: EmConfiguracao = null;
  login = false;
  logado = false;
  erro: any;
  nroEdital: number;
  carregando: boolean;
  publicacao: boolean = false;

  /* salvaDataLicitacao = new SalvaDataLicitacao; */

  arquivo: boolean = false;

  constructor(private emConfiguracaoService: EmConfiguracaoService) { }

  ngOnInit() {
    this.emConfiguracao = new EmConfiguracao;
    $('#modalDetalhesConfiguracao').on('shown.bs.modal', event => {
      this.carregaEmConfiguracaoDetalhes();
    });

    if (localStorage.getItem('currentFornecedor') != null) {
      this.logado = true;
    }
    else {
      this.logado = false;
    }
  }

  carregaEmConfiguracaoDetalhes() {
    this.emConfiguracao = new EmConfiguracao;
    var id = $("#idDetalhesConfiguracao").val();

    this.emConfiguracaoService.getDetalhes(id)
      .subscribe(data => {
        this.emConfiguracao = data;
        this.emConfiguracao.cargo = 'Suely Kummer da Rocha';
        this.emConfiguracao.responsavel = 'Gerente do Departamento de Contratação de Empreendimentos - DEEC - Em Exercício';
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

  carregaNumeroEdital() {
    let numeroEdital = $("#idDetalhesConfiguracao").val();
    return numeroEdital;
  }
  
  cadastrarDataLicitacao() {

    let data = $("#dataLicitacao").val();
    data = this.datePipe(data);
    this.nroEdital = this.carregaNumeroEdital();

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
