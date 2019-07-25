import { Component, OnInit } from '@angular/core';
import { LicitacaoService } from '../_infra/_services/licitacao.service';
import { Licitacao } from '../_infra/_model/licitacao';
import Swal from 'sweetalert2';
import { LicitacaoDetalhe } from '../_infra/_model/licitacao.detalhe';
import { Fornecedor } from '../_infra/_model/fornecedor';
import { ModalService } from '../_infra/_services/modal.service';
import { PagerService } from '../_infra/_services/pager-service.service';
declare var $: any;

@Component({
  selector: 'app-avisolicitacao',
  templateUrl: './avisolicitacao.component.html',
  styleUrls: ['./avisolicitacao.component.scss']
})

export class AvisolicitacaoComponent implements OnInit {
  licitacoes: Licitacao[] = [];
  dataAtual = Date.now();
  carregando = false;
  erro: any;
  licitacaoDetalhe: LicitacaoDetalhe;
  login = false;
  usuario: any;
  fornecedor: Fornecedor;
  pagina: number = 1;
  total: number = 10;
  totalLicitacoes: number = 0;
  pager: any = {};

  constructor(public licitacaoService: LicitacaoService, private modalService: ModalService,
    private pagerService: PagerService) { }  

  ngOnInit() {
    this.carregando = true;
    
    this.recuperarTotalLicitacoes();    
    
    this.licitacaoDetalhe = new LicitacaoDetalhe;
    this.fornecedor = new Fornecedor;
  }

  setPage(page: number) {    
    // get pager object from service
    this.pager = this.pagerService.getPager(this.totalLicitacoes, page);

    this.recuperarLicitacoes(page, 10);
  }

  recuperarLicitacoes(pagina, total) {
    this.licitacaoService.getLicitacoesAtivas(pagina, total)
      .subscribe(data => {
        this.licitacoes = data;
      },
        error => {
          Swal.fire('Ocorreu um erro', 'As licitações ativas não foram encontradas', 'error');
          this.erro = error;
          this.carregando = false;
        }
      )

    this.carregando = false;
  }

  recuperarTotalLicitacoes() {
    this.carregando = true;

    this.licitacaoService.getTotalLicitacoesAtivas()
      .subscribe(data => {
        this.totalLicitacoes = data;
        this.setPage(1); 
      },
        error => {
          Swal.fire('Ocorreu um erro', 'As licitações ativas não foram encontradas', 'error');
          this.erro = error;
          this.carregando = false;
        }
      )

    this.carregando = false;
  }

  abreDetalhes(id: string) {    
    $("#idDetalhe").val(id);
    this.modalService.open('modalDetalhes', id);
  }
}
