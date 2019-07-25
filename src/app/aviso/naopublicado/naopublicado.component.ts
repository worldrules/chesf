import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { NaoPublicado } from '../../_infra/_model/aviso-licitacao/nao.publicado';
import { Page } from '../../../app/_infra/_model/page';
import { Url } from '../../../app/_infra/_common/url';
import * as moment from 'moment/moment';
import { NaoPublicadoService } from '../../../app/_infra/_services/aviso-licitacao/nao.publicado.service';
import { ModalService } from '../../_infra/_services/modal.service';

declare var $;

@Component({
  selector: 'app-naopublicado',
  templateUrl: './naopublicado.component.html',
  styleUrls: ['./naopublicado.component.scss']
})
export class NaoPublicadoComponent implements OnInit {

  columns = [
    { prop: 'dataImportada', name: 'Importado em', pipe: { transform: this.datePipe }, width: 100 },
    { prop: 'licitacao', name: 'Licitação', width: 200 },
    { prop: 'prazoAquisicao', name: 'Aquisição até', pipe: { transform: this.datePipe }, width: 100 },
    { prop: 'objeto', name: 'Objeto', width: 560 }
  ];

  @ViewChild('emptyPesquisa', { static: false }) private emptySwal: SwalComponent;
  @ViewChild('naoPublicadoTable', { static: true }) table;
  page = new Page();
  rows = new Array<NaoPublicado>();
  carregando: boolean = false;
  mais: boolean = false;
  termoPesquisa: string = null;

  constructor(
    private modalService : ModalService,
    private naoPublicadoService: NaoPublicadoService
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

    this.naoPublicadoService.getTotalLicitacoes(pageInfo).subscribe(total => {
      this.page.totalElements = total;
      this.page.totalPages = Math.round(total / 10);
      
      if (this.termoPesquisa != '' || this.termoPesquisa != null) {
        this.page.pesquisa = pageInfo.pesquisa;
      }
      else {
        this.page.pesquisa = null;
      }

      this.page.pageNumber = pageInfo.offset;

      this.naoPublicadoService.getLicitacoes(this.page).subscribe(pagedData => {
        this.rows = pagedData;
        this.carregando = false;
      });
    });

    this.carregando = false;
  }

  abreDetalhesNaoPublicado(id: any) {
    console.log(id);
    $("#idDetalhesNaoPublicado").val(id);
    this.modalService.open('modalDetalhesNaoPublicado', id);
  }
}
