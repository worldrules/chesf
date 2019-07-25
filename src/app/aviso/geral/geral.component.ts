import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Geral } from '../../_infra/_model/aviso-licitacao/geral';
import { Page } from '../../../app/_infra/_model/page';
import * as moment from 'moment/moment';
import { GeralService } from '../../../app/_infra/_services/aviso-licitacao/geral.service';
import { ModalService } from '../../../app/_infra/_services/modal.service';

declare var $;

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.scss']
})
export class GeralComponent implements OnInit {

  @ViewChild('emptyPesquisa', { static: false }) 
  @ViewChild('geralTable', { static: true }) table;
  private emptySwal: SwalComponent;
  page = new Page();
  rows = new Array<Geral>();
  carregando: boolean = false;
  mais: boolean = false;
  termoPesquisa: string = null;

  constructor(
    private geralService: GeralService,
    private modalService: ModalService
    ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit(): void {
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

    this.geralService.getTotalLicitacoes(pageInfo).subscribe(total => {
      this.page.totalElements = total;
      this.page.totalPages = Math.round(total / 10);
      
      if (this.termoPesquisa != '' || this.termoPesquisa != null) {
        this.page.pesquisa = pageInfo.pesquisa;
      }
      else {
        this.page.pesquisa = null;
      }

      this.page.pageNumber = pageInfo.offset;

      this.geralService.getLicitacoes(this.page).subscribe(pagedData => {
        this.rows = pagedData;
        this.carregando = false;
      });
    });

    this.carregando = false;
  }
  abreDetalhes(id: any) {
    $("#idDetalhesGeral").val(id);
    this.modalService.open('modalDetalhesGeral', id);
  }
}
