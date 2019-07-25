import { Component, OnInit } from '@angular/core';
import { Expirado } from '../../../_infra/_model/aviso-licitacao/expirado';
import { ExpiradoService } from '../../../_infra/_services/aviso-licitacao/expirado.service';
import { ModalService } from '../../../_infra/_services/modal.service';

import * as moment from 'moment/moment';
declare var $;

@Component({
  selector: 'app-detalhesexpirado',
  templateUrl: './detalhesexpirado.component.html',
  styleUrls: ['./detalhesexpirado.component.scss']
})
export class DetalheExpiradoComponent implements OnInit {

  expirado: Expirado = null;
  login = false;
  logado = false;
  erro: any;
  nroEdital: number;
  carregando: boolean;
  arquivo: boolean = false;
  publicacao: boolean = false;


  constructor(    
    private expiradoService: ExpiradoService
    ) { }

  ngOnInit() {
    this.expirado = new Expirado;
    $('#modalDetalhesExpirado').on('shown.bs.modal', event => {
      this.carregaExpiradoDetalhes();
    });
  }

  carregaExpiradoDetalhes() {
    this.expirado = new Expirado;
    var id = $("#idDetalhesExpirado").val();

    this.expiradoService.getDetalhes(id)
      .subscribe(data => {
        this.expirado = data;
        this.expirado.responsavel = "Suely Kummer da Rocha";
        this.expirado.cargo = "Gerente do Departamento de Contratação de Empreendimentos - DEEC - Em Exercício";
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
