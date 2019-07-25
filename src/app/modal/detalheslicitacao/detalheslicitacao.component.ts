import { Component, OnInit } from '@angular/core';
import { Licitacao } from '../../../app/_infra/_model/licitacao';
import { ModalService } from '../../../app/_infra/_services/modal.service';
import { LicitacaoService } from '../../../app/_infra/_services/licitacao.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-detalhes-licitacao',
  templateUrl: './detalheslicitacao.component.html',
  styleUrls: ['./detalheslicitacao.component.scss']
})
export class DetalhesLicitacaoComponent implements OnInit {

  licitacaoDetalhe: Licitacao = null;
  login = false;
  logado = false;
  erro: any;
  carregando: boolean;

  constructor(private modalService: ModalService, private licitacaoService: LicitacaoService) { }

  ngOnInit() {
    this.licitacaoDetalhe = new Licitacao;
    $('#modalDetalhes').on('shown.bs.modal', event => {
      this.carregaLicitacaoDetalhes();
    });

    if (localStorage.getItem('currentFornecedor') != null) {
      this.logado = true;
    }
    else { 
      this.logado = false; 
    }
  }

  carregaLicitacaoDetalhes() {
    this.licitacaoDetalhe = new Licitacao;
    var id = $("#idDetalhe").val();

    this.licitacaoService.getLicitacaoDetalhes(id)
      .subscribe(data => { 
        this.licitacaoDetalhe = data;
      },
        error => {
          //Swal.fire('Ocorreu um erro', 'As licitações ativas não foram encontradas', 'error');
          this.erro = error;
          this.carregando = false;
        }
      )
  }

  showLogin() {
    if (this.login) {
      this.login = false;
    }
    else {
      this.login = true;
    }
  }

  loginFornecedor() {
    this.modalService.open('loginFornecedor');
  }

  cadastroFornecedor() {
    this.modalService.open('cadastroFornecedor');
  }

  semAutenticacao() {
    this.logado = true;
  }
}
