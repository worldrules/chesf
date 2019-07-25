import { Component, ViewChild, OnInit } from '@angular/core';
import { EmConfiguracao } from '../../_infra/_model/aviso-licitacao/emconfiguracao/em.configuracao';
import { Page } from '../../../app/_infra/_model/page';
import { Url } from '../../../app/_infra/_common/url';

import * as moment from 'moment/moment';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { EmConfiguracaoService } from '../../_infra/_services/aviso-licitacao/em.configuracao.service';
import { ModalService } from '../../../app/_infra/_services/modal.service';
import { PagerService } from '../../../app/_infra/_services/pager-service.service';

declare var $;

@Component({
  selector: 'app-emconfiguracao',
  templateUrl: './emconfiguracao.component.html',
  styleUrls: ['./emconfiguracao.component.scss']
})
export class EmConfiguracaoComponent implements OnInit {

  @ViewChild('emptyPesquisa', { static: false }) private emptySwal: SwalComponent;
  @ViewChild('emConfiguracaoTable', { static: true }) table;
  page = new Page();
  rows = new Array<EmConfiguracao>();
  carregando: boolean = false;
  url: string = Url.aviso.emConfiguracao.recupera;
  mais: boolean = false;
  termoPesquisa: string = null;

  constructor(
    private emConfiguracaoService: EmConfiguracaoService,
    private modalService: ModalService,
    private pagerService: PagerService
    ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit(): void {
    this.carregando = true;
    this.setPage({ offset: 0 });
  }

  datePipe(value: any, ...args: any[]) {
    return moment(value).format('DD/MM/YYYY');
  }

  expandir() {
    if (!this.mais) {
      $("#expandir").removeClass("ti-angle-down");
      $("#expandir").addClass("ti-angle-up");

      this.mais = true;
    } else {
      $("#expandir").removeClass("ti-angle-up");
      $("#expandir").addClass("ti-angle-down");

      this.mais = false;
    }
  }

  pesquisar() {
    if (this.termoPesquisa == undefined || this.termoPesquisa == "") {
      this.emptySwal.show();
    } else {
      this.setPage({ offset: 0, pesquisa: this.termoPesquisa });
    }
  }

  setPage(pageInfo) {
    this.carregando = true;

    if (this.termoPesquisa != '') {
      pageInfo.pesquisa = this.termoPesquisa;
    }
    else {
      pageInfo.pesquisa = null;
    }

    this.emConfiguracaoService.getTotalLicitacoes(pageInfo).subscribe(total => {
      this.page.totalElements = total;
      this.page.totalPages = Math.round(total / 10);
      
      if (this.termoPesquisa != '' || this.termoPesquisa != null) {
        this.page.pesquisa = pageInfo.pesquisa;
      }
      else {
        this.page.pesquisa = null;
      }

      this.page.pageNumber = pageInfo.offset;

      this.emConfiguracaoService.getLicitacoes(this.page).subscribe(pagedData => {
        this.rows = pagedData;
        this.carregando = false;
      });
    });

    this.carregando = false;
  }
  
  abreDetalhes(id: any) {
    $("#idDetalhesConfiguracao").val(id);
    this.modalService.open('modalDetalhesConfiguracao', id);
  }
}
