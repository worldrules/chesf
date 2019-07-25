import { Component, OnInit } from '@angular/core';
import { NaoPublicado } from '../../../_infra/_model/aviso-licitacao/nao.publicado';
import { NaoPublicadoService } from '../../../_infra/_services/aviso-licitacao/nao.publicado.service';

import * as moment from 'moment/moment';
import { ModalService } from '../../../_infra/_services/modal.service';
declare var $;

@Component({
  selector: 'app-detalhesnaopublicado',
  templateUrl: './detalhesnaopublicado.component.html',
  styleUrls: ['./detalhesnaopublicado.component.scss']
})
export class DetalheNaoPublicadoComponent implements OnInit {

  naoPublicado : NaoPublicado;
  login = false;
  logado = false;
  erro: any;
  carregando: boolean;
  publicacao:boolean = false;  
  arquivo: boolean = false;
  dataPublicacao : string = null;
  constructor(
    private naoPublicadoService : NaoPublicadoService
  ) { }

  ngOnInit() {
    this.naoPublicado = new NaoPublicado;
    $('#modalDetalhesNaoPublicado').on('shown.bs.modal', event => {
      this.carregaNaoPublicadoDetalhes();
    });

    if (localStorage.getItem('currentFornecedor') != null) {
      this.logado = true;
    }
    else {
      this.logado = false;
    }
  }

  carregaNaoPublicadoDetalhes() {
    this.naoPublicado = new NaoPublicado;
    var id = $("#idDetalhesNaoPublicado").val();

    this.naoPublicadoService.getDetalhes(id)
      .subscribe(data => {
        this.naoPublicado = data;
        this.naoPublicado.responsavel = "Suely Kummer da Rocha";
        this.naoPublicado.cargo = "Gerente do Departamento de Contratação de Empreendimentos - DEEC - Em Exercício";
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
