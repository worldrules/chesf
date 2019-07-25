import { Component, OnInit } from '@angular/core';
import { Publicado } from '../../../_infra/_model/aviso-licitacao/publicado';
import { PublicadoService } from '../../../_infra/_services/aviso-licitacao/publicado.service';
import * as moment from 'moment/moment';
declare var $;

@Component({
  selector: 'app-detalhespublicado',
  templateUrl: './detalhespublicado.component.html',
  styleUrls: ['./detalhespublicado.component.scss']
})
export class DetalhePublicadoComponent implements OnInit {

  publicado: Publicado = null;
  login = false;
  logado = false;
  erro: any;
  nroEdital: number;
  carregando: boolean;
  publicacao: boolean = false;

  /* salvaDataLicitacao = new SalvaDataLicitacao; */

  arquivo: boolean = false;

  constructor(private publicadoService: PublicadoService) { }

  ngOnInit() {
    this.publicado = new Publicado;
    $('#modalDetalhesPublicado').on('shown.bs.modal', event => {
      this.carregaPublicadoDetalhes();
    });

    if (localStorage.getItem('currentFornecedor') != null) {
      this.logado = true;
    }
    else {
      this.logado = false;
    }
  }

  carregaPublicadoDetalhes() {
    this.publicado = new Publicado;
    var id = $("#idDetalhesPublicado").val();

    this.publicadoService.getDetalhes(id)
      .subscribe(data => {
        this.publicado = data;
        this.publicado.cargo = 'Suely Kummer da Rocha';
        this.publicado.responsavel = 'Gerente do Departamento de Contratação de Empreendimentos - DEEC - Em Exercício';
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
    let numeroEdital = $("#idDetalhesPublicado").val();
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
