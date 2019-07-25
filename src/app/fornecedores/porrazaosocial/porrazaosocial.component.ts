import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../_infra/_services/modal.service';

import * as moment from 'moment/moment';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Page } from '../../_infra/_model/page';
import { Fornecedor } from '../../_infra/_model/fornecedor';
import { PagerService } from '../../_infra/_services/pager-service.service';

declare var $;

@Component({
  selector: 'app-porrazaosocial',
  templateUrl: './porrazaosocial.component.html',
  styleUrls: ['./porrazaosocial.component.scss']
})
export class PorRazaoSocialComponent implements OnInit {

  carregando: boolean = false;
  termoPesquisa: string = null;
  page = new Page();
  rows = new Array<Fornecedor>();
  mais: boolean = false;

  @ViewChild('emptyPesquisa', { static: false }) private emptySwal: SwalComponent;

  constructor(
    private modalService: ModalService,
    private pagerService: PagerService
  ) { 
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit():void {
    this.carregando = true;
    this.setPage({ offset: 0 });
  }

  datePipe(value: any, ...args: any[]) {
    return moment(value).format('DD/MM/YYYY');
  }

  setPage(pageInfo) {
    this.carregando = true;

    if (this.termoPesquisa != '') {
      pageInfo.pesquisa = this.termoPesquisa;
    }
    else {
      pageInfo.pesquisa = null;
    }

    // this.porRazaoSocialService.getTotalLicitacoes(pageInfo).subscribe(total => {
    //   this.page.totalElements = total;
    //   this.page.totalPages = Math.round(total / 10);

    //   if (this.termoPesquisa != '' || this.termoPesquisa != null) {
    //     this.page.pesquisa = pageInfo.pesquisa;
    //   }
    //   else {
    //     this.page.pesquisa = null;
    //   }

    //   this.page.pageNumber = pageInfo.offset;

    //   this.porRazaoSocialService.getLicitacoes(this.page).subscribe(pagedData => {
    //     this.rows = pagedData;
    //     this.carregando = false;
    //   });
    // });

    this.carregando = false;
  }

  pesquisar() {
    if (this.termoPesquisa == undefined || this.termoPesquisa == "") {
      this.emptySwal.show();
    } else {
      this.setPage({ offset: 0, pesquisa: this.termoPesquisa });
    }
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

}
