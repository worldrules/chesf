import { Component, OnInit } from '@angular/core';
import { ComoParticiparService } from '../_infra/_services/comoparticipar.service';
import { AuthenticationService } from '../_infra/_services/authentication.service';

@Component({
  selector: 'app-comoparticipar',
  templateUrl: './comoparticipar.component.html',
  styleUrls: ['./comoparticipar.component.scss']
})
export class ComoparticiparComponent implements OnInit {

  parametro: any;
  parametroDescricao: any;

  constructor(private comoParticiparService: ComoParticiparService, private autenticaService: AuthenticationService) { }

  ngOnInit() {
    this.recuperarComoParticipar();
    this.carregaDescricaoComoParticipar();
    
    if (this.autenticaService.currentFornecedorSubject.value == null && this.autenticaService.currentUserADSubject.value == null) {
      this.autenticaService.currentFornecedor.subscribe(data => {
        if (data == null) {
          this.parametroDescricao = null;
        }
      });

      this.autenticaService.currentUserAD.subscribe(data => {
        if (data == null) {
          this.parametroDescricao = null;
        }
      });
    }
  }

  recuperarComoParticipar() {
    this.comoParticiparService.getComoParticipar().subscribe(data => {
      this.parametro = data;
    });
  }

  carregaDescricaoComoParticipar() {
    if (this.autenticaService.currentFornecedorValue != null) {
      this.comoParticiparService.getComoParticiparDescricao('FORNECEDOR').subscribe(data => { this.parametroDescricao = data; });
    } else if (this.autenticaService.currentUserADValue != null) {
      this.comoParticiparService.getComoParticiparDescricao('ANALISTA').subscribe(data => { this.parametroDescricao = data; });
    }
  }
}
