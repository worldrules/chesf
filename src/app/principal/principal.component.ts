import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../_infra/_services/principal.service';
import { AuthenticationService } from '../_infra/_services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-principal',
  moduleId: module.id,
  templateUrl: 'principal.component.html'
})

export class PrincipalComponent implements OnInit {
  principal: any;
  principalDescricao: any;

  constructor(private principalService: PrincipalService, private autenticacaoService: AuthenticationService) { }

  ngOnInit() {
    this.carregaPrincipal();
    this.carregaDescricaoPrincipal();

    this.autenticacaoService.currentUserADSubject.subscribe(data => {
      if (data == null) {
        this.principalDescricao = null;       
      } else {
        this.carregaDescricaoPrincipal();
      }
    });

    this.autenticacaoService.currentFornecedorSubject.subscribe(data => {
      if (data == null) {
        this.principalDescricao = null;       
      } else {
        this.carregaDescricaoPrincipal();
      }
    });
  }

  carregaPrincipal() {
    this.principalService.getPrincipal().subscribe(data => { this.principal = data; });
  }

  carregaDescricaoPrincipal() {
    if (this.autenticacaoService.currentFornecedorValue != null) {
      this.principalService.getPrincipalDescricao('FORNECEDOR').subscribe(data => { this.principalDescricao = data; });
    } else if (this.autenticacaoService.currentUserADValue != null) {
      this.principalService.getPrincipalDescricao('ANALISTA').subscribe(data => { this.principalDescricao = data; });
    }
  }
}
