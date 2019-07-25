import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../app/_infra/_services/authentication.service';
import Swal from 'sweetalert2';
import { ModalService } from '../../../app/_infra/_services/modal.service';
declare var $: any;

@Component({
  selector: 'app-modal-trocasenha',
  templateUrl: './trocasenha.component.html',
  styleUrls: ['./trocasenha.component.scss']
})
export class TrocaSenhaComponent implements OnInit {

  usuario: string = '';
  senhaAntiga: string = '';
  senhaNova: string = '';
  confirmaNovaSenha: string = '';

  loading = false;

  constructor(private autenticaService: AuthenticationService,
    private modalService: ModalService) { }

  ngOnInit() { 
    this.loading = false;
  }

  trocaSenha() {
    this.loading = true;

    const usuario = this.usuario;
    
    if (usuario == null || usuario == '') {
      Swal.fire('Atenção', 'O usuário deve ser preenchida!', 'error');
    }

    if (this.senhaAntiga == null || this.senhaAntiga == '') {
      Swal.fire('Atenção', 'A senha antiga deve ser preenchida!', 'error');
    }

    if (this.senhaNova == null || this.senhaNova == '') {
      Swal.fire('Atenção', 'A senha nova deve ser preenchida!', 'error');
    }

    if (this.confirmaNovaSenha == null || this.confirmaNovaSenha == '') {
      Swal.fire('Atenção', 'A confirmação da nova senha deve ser preenchida!', 'error');
    }

    if (this.senhaNova != this.confirmaNovaSenha) {
      Swal.fire('Atenção', 'A senha nova deve ser igual no campo configrma nova senha!', 'error');
    }

    this.autenticaService.loginTrocaSenha(usuario, this.senhaAntiga, this.senhaNova).subscribe(
      data => {
        this.loading = false;
        this.modalService.close('modalTrocaSenha');        
        this.autenticaService.logout();
        Swal.fire('Atenção', 'A senha foi alterada, você deve logar novamente para validar a nova senha.', 'success');
      },
      error => {
        this.loading = false;
        Swal.fire('Atenção', error.error, 'error');
      }
    );

    this.loading = false;
  }
}
