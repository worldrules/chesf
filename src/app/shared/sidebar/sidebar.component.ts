import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../app/_infra/_services/authentication.service';
import { Router } from '@angular/router';
import { ModalService } from '../../../app/_infra/_services/modal.service';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    idSubMenu:string;
    submenu: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
    { path: 'logsistema', idSubMenu: '', title: 'Login', icon: '', class: '', submenu: [] },
    { path: 'principal', idSubMenu: '', title: 'Principal', icon: 'ti-home', class: '', submenu: [] },
    { path: 'inserirnovoplano', idSubMenu: '', title: 'Inserir Novo Plano', icon: 'ti-folder', class: '', submenu: [] },
    { path: 'planosdeseguranca', idSubMenu: '', title: 'Planos de Segurança', icon: 'ti-control-play', class: '', submenu: [] },
    { path: 'auditorias', idSubMenu: '', title: 'Auditorias', icon: 'fas fa-university', class: '', submenu: [] },
    { path: 'comunicacoesinternas', idSubMenu: '', title: 'Comunicações Internas', icon: 'fas fa-mobile-alt', class: '', submenu: [] },
    { path: 'atas', idSubMenu: '', title: 'Atas', icon: 'fas fa-file', class: '', submenu: [] },
    { path: 'items', idSubMenu: '', title: 'Items', icon: 'fas fa-cubes', class: '', submenu: [] },
    { path: 'tipodeobra', idSubMenu: '', title: 'Tipo de Obra', icon: 'fas fa-wrench', class: '', submenu: [] },
];

export const ROUTESLogado: RouteInfo[] = [
    { path: 'principal', idSubMenu: '', title: 'Principal', icon: 'ti-home', class: '', submenu: [] },
    { path: 'comoparticipar', idSubMenu: '', title: 'Como Participar', icon: 'ti-thumb-up', class: '', submenu: [] },
    {
        path: 'null', idSubMenu: 'aviso', title: 'Aviso de Licitação', icon: 'ti-book', class: '', submenu:
            [
                { idSubMenu: '', path: 'aviso/emconfiguracao', title: 'Em Configuração', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'aviso/programado', title: 'Programado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'aviso/publicado', title: 'Publicado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'aviso/expirado', title: 'Expirado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'aviso/naopublicado', title: 'Não publicado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'aviso/geral', title: 'Geral', icon: '', class: 'sidebar-normal', submenu: [] }
            ]
    },
    {
        idSubMenu: 'fornecedores', path: 'null', title: 'Fornecedores', icon: 'ti-package', class: '', submenu:
            [
                { idSubMenu: '', path: 'fornecedores/porrazaosocial', title: 'Por Razão Social', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/porsituacao', title: 'Por Situação', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'Fornecedores/inscritosestado', title: 'Inscritos Por Estado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/situacaoporestado', title: 'Situação Por Estado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/inscritosporcidade', title: 'Inscritos por Cidade', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/porargumento', title: 'Por Argumento', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/enderecodetalhado', title: 'Endereço Detalhado', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/notificacoes', title: 'Notificações', icon: '', class: 'sidebar-normal', submenu: [] },
                { idSubMenu: '', path: 'fornecedores/basefornecedores', title: 'Base de Fornecedores', icon: '', class: 'sidebar-normal', submenu: [] }
            ]
    },
    {
        idSubMenu: 'configuracoes', path: 'null', title: 'Configurações', icon: 'ti-settings', class: '', submenu:
            [
                {
                    idSubMenu: 'gerais', path: 'null', title: 'Gerais', icon: '', class: 'sidebar-normal', submenu:
                        [
                            { idSubMenu: '', path: 'configuracoes/gerais/gerais', title: 'Gerais', icon: '', class: 'paddingleft20', submenu: [] },
                            { idSubMenu: '', path: 'configuracoes/gerais/modeloemail', title: 'Modelos de Emails', icon: '', class: 'paddingleft20', submenu: [] },
                            { idSubMenu: '', path: 'configuracoes/gerais/listaregionais', title: 'Lista de Regionais', icon: '', class: 'paddingleft20', submenu: [] },
                            { idSubMenu: '', path: 'configuracoes/gerais/registrodownloads', title: 'Registro de Downloads', icon: '', class: 'paddingleft20', submenu: [] }
                        ]
                },
                {
                    idSubMenu: 'fornece', path: 'null', title: 'Fornecedores', icon: '', class: 'sidebar-normal', submenu:
                        [
                            { idSubMenu: '', path: 'configuracoes/fornecedor/gerais', title: 'Gerais', icon: '', class: 'paddingleft20', submenu: [] },
                            { idSubMenu: '', path: 'configuracoes/fornecedor/modeloparaemail', title: 'Modelo para Email', icon: '', class: 'paddingleft20', submenu: [] }
                        ]
                },
            ]
    },
    {  idSubMenu: '', path: 'logsistema', title: 'Log do Sistema', icon: 'ti-na', class: '', submenu: [] }
];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    expandido = false;
    logado = false;

    constructor(private authService: AuthenticationService,
        private modalService: ModalService,
        public route: Router) {
    }

    ngOnInit() {
        this.authService.currentUserAD.subscribe(user => {
            if (user != null){
                this.menuItems = ROUTESLogado.filter(menuItem => menuItem);
            }
            else {
                this.menuItems = ROUTES.filter(menuItem => menuItem);
            }
        });

        this.authService.currentFornecedor.subscribe(user => {
            if (user != null){
                this.logado = true;
            }
            else {
                this.logado = false;
            }
        });
    }

    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    expandItem(id){
        if($("#" + id).hasClass('in')){
            $("#" + id).removeClass('in');
        }
        else{
            $("#" + id).addClass('in');
        }
    }

    abrirInscrevase() {
        this.modalService.open('cadastroFornecedor')
    }
}
