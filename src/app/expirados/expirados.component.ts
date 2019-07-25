import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Licitacao } from '../_infra/_model/licitacao';
import { LicitacaoService } from '../_infra/_services/licitacao.service';
import Swal from 'sweetalert2';
import { LicitacaoDetalhe } from '../_infra/_model/licitacao.detalhe';
import { Fornecedor } from '../_infra/_model/fornecedor';
import { PagerService } from '../_infra/_services/pager-service.service';
import { ModalService } from '../_infra/_services/modal.service';
declare var $: any;

@Component({
  selector: 'app-expirados',
  templateUrl: './expirados.component.html',
  styleUrls: ['./expirados.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('in', style({
        opacity: 0
      })),
      state('out',   style({
        opacity: 1
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('200ms ease-out'))
    ])
  ]
})

export class ExpiradosComponent implements OnInit {
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
    this.recuperarTotalLicitacoesExpiradas();    
    
    this.licitacaoDetalhe = new LicitacaoDetalhe;
    this.fornecedor = new Fornecedor;
  }

  setPage(page: number) {    
    // get pager object from service
    this.pager = this.pagerService.getPager(this.totalLicitacoes, page);

    this.recuperarLicitacoesExpiradas(page, 10);
  }

  recuperarLicitacoesExpiradas(pagina, total) {
    this.carregando = true;

    this.licitacaoService.getLicitacoesInativas(pagina, total)
      .subscribe(data => {
        this.licitacoes = data;
      },
        error => {
          Swal.fire('Ocorreu um erro', 'As licitações inativas não foram encontradas', 'error');
          this.erro = error;
          this.carregando = false;
        }
      )

    this.carregando = false;
  }

  recuperarTotalLicitacoesExpiradas() {
    this.carregando = true;

    this.licitacaoService.getTotalLicitacoesInativas()
      .subscribe(data => {
        this.totalLicitacoes = data;
        this.setPage(1); 
      },
        error => {
          Swal.fire('Ocorreu um erro', 'As licitações inativas não foram encontradas', 'error');
          this.erro = error;
          this.carregando = false;
        }
      )

    this.carregando = false;
  }
}
