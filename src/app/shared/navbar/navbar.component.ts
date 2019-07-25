import { Component, OnInit, Renderer, ViewChild, ElementRef, Injector } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { AuthenticationService } from '../../../app/_infra/_services/authentication.service';
import { ModalService } from '../../../app/_infra/_services/modal.service';
import { Usuario } from '../../../app/_infra/_model/usuario';
import { Fornecedor } from '../../../app/_infra/_model/fornecedor';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    @ViewChild('emptyPesquisa', { static: false }) private emptySwal: SwalComponent;
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    pesquisa: '';
    logado = false;
    usuario: '';
    senha: '';
    loading = false;
    retorno;
    LoginADLogado;
    LoginFornecedorLogado;
    perfilLogado;
    situacao = false;
    esqueciMinhaSenha = false;
    podeTrocarSenha: boolean = false;

    @ViewChild("navbar-cmp", { static: false }) button;

    constructor(location: Location,
        private element: ElementRef,
        private router: Router,
        private autenticaService: AuthenticationService,
        private modalService: ModalService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });

        if (localStorage.getItem('LoginADLogado') != null) {
            this.LoginADLogado = JSON.parse(localStorage.getItem('LoginADLogado'));
        } else {
            this.LoginFornecedorLogado = JSON.parse(localStorage.getItem('currentFornecedor'));
        }

        if (this.LoginADLogado != null) {
            this.autenticaService.currentUserADSubject.subscribe(user => {
                if (user != null) {
                    this.logado = true;
                    this.perfilLogado = (user as any).cnpj;
                    this.podeTrocarSenha = false;
                    this.situacao = true;
                    this.esqueciMinhaSenha = false;

                    //this.autenticaService.currentUserADSubject.next((user as Usuario));
                }
                else {
                    this.logado = false;
                    this.perfilLogado = null;
                    this.podeTrocarSenha = false;
                    this.situacao = false;
                    this.esqueciMinhaSenha = true;
                }
            });
        }
        else {
            this.autenticaService.currentFornecedorSubject.subscribe(user => {
                if (user != null) {
                    this.logado = true;
                    this.perfilLogado = (user as any).cnpj;
                    this.podeTrocarSenha = true;
                    this.situacao = true;
                    this.esqueciMinhaSenha = false;
                    //this.autenticaService.currentFornecedorSubject.next((user as Fornecedor));
                }
                else {
                    this.logado = false;
                    this.perfilLogado = null;
                    this.podeTrocarSenha = false;
                    this.situacao = false;
                    this.esqueciMinhaSenha = true;
                }
            });
        }

        this.situacao = false;
    }

    getTitle() {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Principal';
    }

    sidebarToggle() {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    pequisaLicitacoes() {
        if (this.pesquisa == undefined || this.pesquisa == "") {
            this.emptySwal.show();
        }
        else {
            $("#dadosPesquisa").val(this.pesquisa);
            this.router.navigate(['/pesquisa']);
        }
    }

    login() {
        this.modalService.open('myADLogin');
    }

    logout() {
        this.autenticaService.currentUserADSubject.next(null);
        this.autenticaService.currentFornecedorSubject.next(null);
        localStorage.clear();
        this.logado = false;
        this.perfilLogado = null;
        this.podeTrocarSenha = false;
        this.situacao = false;
        this.router.navigate(['/']);
    }

    trocaSenha() {
        this.modalService.open('modalTrocaSenha', null);
    }

    mostraMenu() {
        if (this.situacao) {
            this.situacao = false;
            $("#arrowUser").removeClass('ti-angle-up');
            $("#arrowUser").addClass('ti-angle-down');

            $("#userDados").css('display', 'block');
        } else {
            this.situacao = true;
            $("#arrowUser").removeClass('ti-angle-down');
            $("#arrowUser").addClass('ti-angle-up');

            $("#userDados").css('display', 'none');
        }
    }

    esqueciSenha(){
        this.modalService.open('modalEsqueciSenha');
    }
}
