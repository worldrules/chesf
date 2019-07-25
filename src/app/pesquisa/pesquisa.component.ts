import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Fornecedor } from '../_infra/_model/fornecedor';
import { LicitacaoDetalhe } from '../_infra/_model/licitacao.detalhe';
import { ModalService } from '../_infra/_services/modal.service';
import { PagerService } from '../_infra/_services/pager-service.service';
import { PesquisaService } from '../_infra/_services/pesquisa.service';
import { Licitacao } from '../_infra/_model/licitacao';
import { Page } from '../_infra/_model/page';
declare var $: any;

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {
  @ViewChild('myTable', { static: true }) table: any;

  carregando: boolean = false;
  page = new Page();
  licitacoes: Array<Licitacao>;
  totalLicitacoes: number = 0;

  funder = [];
  calculated = [];
  pending = [];
  groups = [];
  
  editing = {};  
  rows = [];
  
  constructor(public pesquisaService: PesquisaService, private modalService: ModalService,
    private pagerService: PagerService) { }  

  ngOnInit() {
    this.page.pesquisa = $("#pesquisa").val();
    this.recuperarLicitacoes();
  }

  recuperarTotalLicitacoes() {
    this.carregando = true;

    this.pesquisaService.getTotalPesquisa(this.page)
      .subscribe(data => {
        this.totalLicitacoes = data;        
      },
        error => {
          Swal.fire('Ocorreu um erro', 'As licitações pesquisadas não foram encontradas', 'error');          
          this.carregando = false;
        }
      )

    this.carregando = false;
  }

  recuperarLicitacoes() {
    this.pesquisaService.getPesquisa(this.page)
      .subscribe(data => {
        this.licitacoes = data;
      },
        error => {
          Swal.fire('Ocorreu um erro', 'As licitações pesquisadas não foram encontradas', 'error');          
          this.carregando = false;
        }
      )

    this.carregando = false;
  }

  checkGroup(event, row, rowIndex, group) {
    let groupStatus: string = 'Pending';
    let expectedPaymentDealtWith: boolean = true;

    row.exppayyes = 0;
    row.exppayno = 0;
    row.exppaypending = 0;
      
    if (event.target.checked)
      if (event.target.value === '0') { // expected payment yes selected
        row.exppayyes = 1;
      } else if (event.target.value === '1') { // expected payment yes selected
        row.exppayno = 1;
      } else if (event.target.value === '2') { // expected payment yes selected
        row.exppaypending = 1;
      }

    if (group.length === 2) { // There are only 2 lines in a group
      // tslint:disable-next-line:max-line-length
      if (['Calculated', 'Funder'].indexOf(group[0].source) > -1 && ['Calculated', 'Funder'].indexOf(group[1].source) > -1) { // Sources are funder and calculated
        // tslint:disable-next-line:max-line-length
        if (group[0].startdate === group[1].startdate && group[0].enddate === group[1].enddate) { // Start dates and end dates match
          for (let index = 0; index < group.length; index++) {
            if (group[index].source !== row.source) {
              if (event.target.value === '0') { // expected payment yes selected
                group[index].exppayyes = 0;
                group[index].exppaypending = 0;
                group[index].exppayno = 1;
              }
            }

            if (group[index].exppayyes === 0 && group[index].exppayno === 0 && group[index].exppaypending === 0) {
              expectedPaymentDealtWith = false;
            }
            console.log('expectedPaymentDealtWith', expectedPaymentDealtWith);
          }
        }
      }
    } else {
      for (let index = 0; index < group.length; index++) {
        if (group[index].exppayyes === 0 && group[index].exppayno === 0 && group[index].exppaypending === 0) {
          expectedPaymentDealtWith = false;
        }
        console.log('expectedPaymentDealtWith', expectedPaymentDealtWith);
      }      
    }

    // check if there is a pending selected payment or a row that does not have any expected payment selected
    if (group.filter(rowFilter => rowFilter.exppaypending === 1).length === 0 
      && group.filter(rowFilter => rowFilter.exppaypending === 0 
                      && rowFilter.exppayyes === 0 
                      && rowFilter.exppayno === 0).length === 0) {
      console.log('expected payment dealt with');
      
      // check if can set the group status
      const numberOfExpPayYes = group.filter(rowFilter => rowFilter.exppayyes === 1).length;
      const numberOfSourceFunder = group.filter(
          rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Funder').length;
      const numberOfSourceCalculated = group.filter(
          rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Calculated').length;
      const numberOfSourceManual = group.filter(
          rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Manual').length;

      console.log('numberOfExpPayYes', numberOfExpPayYes);
      console.log('numberOfSourceFunder', numberOfSourceFunder);
      console.log('numberOfSourceCalculated', numberOfSourceCalculated);
      console.log('numberOfSourceManual', numberOfSourceManual);

      if (numberOfExpPayYes > 0){
        if (numberOfExpPayYes === numberOfSourceFunder){
          groupStatus = 'Funder Selected';
        } else if (numberOfExpPayYes === numberOfSourceCalculated){
          groupStatus = 'Calculated Selected';
        } else if (numberOfExpPayYes === numberOfSourceManual) {
          groupStatus = 'Manual Selected';
        } else {
          groupStatus = 'Hybrid Selected';
        }
      }
        
    }

    group[0].groupstatus = groupStatus;    
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }  

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  abreDetalhes(id: string) {    
    $("#idDetalhe").val(id);
    this.modalService.open('modalDetalhes', id);
  }
}
