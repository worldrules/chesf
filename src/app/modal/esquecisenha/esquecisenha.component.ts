import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../app/_infra/_services/authentication.service';
import Swal from 'sweetalert2';
import { ModalService } from '../../../app/_infra/_services/modal.service';
declare var $: any;

@Component({
  selector: 'app-modal-esquecisenha',
  templateUrl: './esquecisenha.component.html',
  styleUrls: ['./esquecisenha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {

  usuario: string = '';
  novaSenha: string = '';
  senha: string = '';

  loading = false;

  constructor(private autenticaService: AuthenticationService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.autenticaService.currentFornecedor.subscribe(data => {
      if (data != null) {
        this.usuario = data.cnpj;
      }
    });
  }

  trocaSenha() {
    this.loading = true;

    const usuario = this.usuario;
        
    if (usuario == null || usuario == '') {
      Swal.fire('Atenção', 'O usuário deve ser preenchido!', 'error');
    }

    this.autenticaService.loginNovaSenha(usuario).subscribe(
      data => {
        this.loading = false;
        this.modalService.close('modalEsqueciSenha');        
        this.autenticaService.logout();
        Swal.fire('Solicitação enviada!', 'Foi enviado um email com as nova senha para o email cadastrado para esse CNPJ', 'success');
      },
      error => {
        this.loading = false;
        Swal.fire('Atenção', 'O CNPJ informado não foi encontrado em nossa base de fornecedores. Caso não tenha cadastro ainda, inscreva-se.', 'error');
      }
    );

    this.loading = false;
  }
}
