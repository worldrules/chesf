import {
    Component,
    OnInit
} from '@angular/core';

import { AuthenticationService } from '../../../app/_infra/_services/authentication.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-modal-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    loading = false;
    usuario: string = '';
    senha: string = '';
    retorno;
    LoginADLogado;
    LoginFornecedorLogado;

    constructor(private autenticaService: AuthenticationService) {
        $("#botoes").fadeIn();
        $("#loading").hide();
    }

    ngOnInit() {
        $("#myADLogin").on('show.bs.modal', function () {
            $("#botoes").fadeIn();
            $("#loading").hide();
        });
    }

    loginAD() {
        $("#botoes").hide();
        $("#loading").fadeIn();

        const usuario = this.usuario;
        const senha = this.senha;

        var isNumber = /^\d+$/.test(usuario);

        if (isNumber) {
            this.logarFornecedor(usuario, senha);
        } else {
            this.logarAD(usuario, senha);
        }       
    }

    logarFornecedor(usuario: string, senha: string) {
        $("#botoes").hide();
        $("#loading").fadeIn();

        this.autenticaService.loginFornecedor(usuario, senha).subscribe(
            data => {
                this.retorno = data;
                localStorage.setItem('currentFornecedor', JSON.stringify(this.retorno));

                if (this.retorno.autenticado) {
                    $('#myADLogin').modal('hide');
                    localStorage.setItem('currentFornecedor', JSON.stringify(this.retorno));
                    this.LoginFornecedorLogado = usuario;

                    this.autenticaService.currentFornecedorSubject.next(this.retorno);

                    $("#botoes").fadeIn();
                    $("#loading").hide();
                } else {
                    $("#botoes").fadeIn();
                    $("#loading").hide();
                    Swal.fire('Atenção', 'Usuário e/ou Senha estão incorretos!', 'error');
                }
            },
            error => {
                $("#botoes").fadeIn();
                $("#loading").hide();
                Swal.fire('Atenção', 'Ocorreu um erro ao validar!', 'error');
            }
        );
    }

    logarAD(usuario: string, senha: string) {
        $("#botoes").hide();
        $("#loading").fadeIn();
        this.autenticaService.loginAD(usuario, senha).subscribe(
            data => {
                this.retorno = data;
                localStorage.setItem('currentUserAD', JSON.stringify(this.retorno));

                if (this.retorno.autenticado) {                    
                    $('#myADLogin').modal('hide');
                    localStorage.setItem('LoginADLogado', JSON.stringify(this.retorno));
                    this.LoginADLogado = usuario;

                    this.autenticaService.currentUserADSubject.next(this.retorno);
                    $("#botoes").fadeIn();
                    $("#loading").hide();
                } else {
                    Swal.fire('Atenção', 'Usuário e/ou Senha estão incorretos!', 'error');
                    $("#botoes").fadeIn();
                    $("#loading").hide();
                }
            },
            error => {
                $("#botoes").fadeIn();
                $("#loading").hide();
                Swal.fire('Atenção', 'Ocorreu um erro ao validar!', 'error');
            }
        );
    }
}
