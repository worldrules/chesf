import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routing';

import { SidebarModule } from './shared/sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { LoginModule } from './modal/login/login.module';

import { AuthenticationService } from './_infra/_services/authentication.service';
import { LicitacaoService } from './_infra/_services/licitacao.service';
import { ComoParticiparService } from './_infra/_services/comoparticipar.service';
import { PrincipalService } from './_infra/_services/principal.service';
import { LoginInicialComponent } from './login-inicial/login-inicial.component';
import { PrincipalComponent } from './principal/principal.component';
import { ExpiradosComponent } from './expirados/expirados.component';
import { AvisolicitacaoComponent } from './avisolicitacao/avisolicitacao.component';
import { ComoparticiparComponent } from './comoparticipar/comoparticipar.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { LoginComponent } from './modal/login/login.component';
import { EmConfiguracaoComponent } from './aviso/emconfiguracao/emconfiguracao.component';
import { ProgramadoComponent } from './aviso/programado/programado.component';
import { PublicadoComponent } from './aviso/publicado/publicado.component';
import { ExpiradoComponent } from './aviso/expirado/expirado.component';
import { NaoPublicadoComponent } from './aviso/naopublicado/naopublicado.component';
import { GeralComponent } from './aviso/geral/geral.component';
import { PorRazaoSocialComponent } from './fornecedores/porrazaosocial/porrazaosocial.component';
import { PorSituacaoComponent } from './fornecedores/porsituacao/porsituacao.component';
import { InscritosEstadoComponent } from './fornecedores/inscritosestado/inscritosestado.component';
import { SituacaoPorEstadoComponent } from './fornecedores/situacaoporestado/situacaoporestado.component';
import { InscritosPorCidadeComponent } from './fornecedores/inscritosporcidade/inscritosporcidade.component';
import { PorArgumentoComponent } from './fornecedores/porargumento/porargumento.component';
import { EnderecoDetalhadoComponent } from './fornecedores/enderecodetalhado/enderecodetalhado.component';
import { NotificacoesComponent } from './fornecedores/notificacoes/notificacoes.component';
import { BaseFornecedoresComponent } from './fornecedores/basefornecedores/basefornecedores.component';
import { GeraisComponent } from './configuracoes/gerais/gerais/gerais.component';
import { ModeloEmailComponent } from './configuracoes/gerais/modeloemail/modeloemail.component';
import { ListaRegionaisComponent } from './configuracoes/gerais/listaregionais/listaregionais.component';
import { RegistroDownloadsComponent } from './configuracoes/gerais/registrodownloads/registrodownloads.component';
import { ModeloParaEmailComponent } from './configuracoes/fornecedor/modeloparaemail/modeloparaemail.component';
import { LogSistemaComponent } from './logsistema/logsistema.component';
import { GeraisComponent as GeraisFornecedorComponent } from './configuracoes/fornecedor/gerais/gerais.component';
import { LoginFornecedorModule } from './modal/loginfornecedor/loginfornecedor.module';
import { LoginfornecedorComponent } from './modal/loginfornecedor/loginfornecedor.component';
import { DetalhesLicitacaoComponent } from './modal/detalheslicitacao/detalheslicitacao.component';
import { CadastroFornecedorComponent } from './modal/cadastrofornecedor/cadastrofornecedor.component';
import { CadastroFornecedorModule } from './modal/cadastrofornecedor/cadastrofornecedor.module';
import { DetalhesLicitacaoModule } from './modal/detalheslicitacao/detalhelicitacao.module';
import { ModalService } from './_infra/_services/modal.service';
import { TrocaSenhaModule } from './modal/trocasenha/trocasenha.module';
import { TrocaSenhaComponent } from './modal/trocasenha/trocasenha.component';
import { PagerService } from './_infra/_services/pager-service.service';

import { PesquisaService } from './_infra/_services/pesquisa.service';
import { EmConfiguracaoService } from './_infra/_services/aviso-licitacao/em.configuracao.service';
import { ExpiradoService } from './_infra/_services/aviso-licitacao/expirado.service';
import { ProgramadoService } from './_infra/_services/aviso-licitacao/programado.service';
import { GeralService } from './_infra/_services/aviso-licitacao/geral.service';
import { NaoPublicadoService } from './_infra/_services/aviso-licitacao/nao.publicado.service';
import { PublicadoService } from './_infra/_services/aviso-licitacao/publicado.service';
import { EsqueciSenhaComponent } from './modal/esquecisenha/esquecisenha.component';
import { EsqueciSenhaModule } from './modal/esquecisenha/esquecisenha.module';
import { FiltroAvisoModule } from './common/filtros/aviso/filtro.aviso.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetalheConfiguracaoComponent } from './modal/aviso/detalhesconfiguracao/detalheConfiguracao.component';
import { ArquivoComponent } from './modal/aviso/arquivo/arquivo.component';
import { DetalheProgramadoComponent } from './modal/aviso/detalhesprogramado/detalheProgramado.component';
import { DetalhePublicadoComponent } from './modal/aviso/detalhespublicado/detalhePublicado.component';
import { DetalheExpiradoComponent } from './modal/aviso/detalhesexpirado/detalheExpirado.component';
import { DetalheNaoPublicadoComponent } from './modal/aviso/detalhesnaopublicado/detalheNaoPublicado.component';
import { DetalheGeralComponent } from './modal/aviso/detalhesgeral/detalheGeral.component';
import { InserirplanoComponent } from './inserirplano/inserirplano.component';
import { PlanosdesegurancaComponent } from './planosdeseguranca/planosdeseguranca.component';
import { AuditoriasComponent } from './auditorias/auditorias.component';
import { ItemsComponent } from './items/items.component';
import { TipodeobraComponent } from './tipodeobra/tipodeobra.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ExpiradosComponent,
    AvisolicitacaoComponent,
    ComoparticiparComponent,
    PesquisaComponent,
    EmConfiguracaoComponent,
    ProgramadoComponent,
    PublicadoComponent,
    ExpiradoComponent,
    NaoPublicadoComponent,
    GeralComponent,
    PorRazaoSocialComponent,
    PorSituacaoComponent,
    InscritosEstadoComponent,
    SituacaoPorEstadoComponent,
    InscritosPorCidadeComponent,
    PorArgumentoComponent,
    EnderecoDetalhadoComponent,
    NotificacoesComponent,
    BaseFornecedoresComponent,
    GeraisComponent,
    ModeloEmailComponent,
    ListaRegionaisComponent,
    RegistroDownloadsComponent,
    ModeloParaEmailComponent,
    LogSistemaComponent,
    GeraisFornecedorComponent,
    DetalheConfiguracaoComponent,
    ArquivoComponent,
    DetalheProgramadoComponent,
    DetalhePublicadoComponent,
    DetalheExpiradoComponent,
    DetalheNaoPublicadoComponent,
    DetalheGeralComponent,
    InserirplanoComponent,
    LoginInicialComponent,
    PlanosdesegurancaComponent,
    AuditoriasComponent,
    ItemsComponent,
    TipodeobraComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FormsModule,
    LoginModule,
    LoginFornecedorModule,
    CadastroFornecedorModule,
    DetalhesLicitacaoModule,
    BrowserAnimationsModule,
    TrocaSenhaModule,
    EsqueciSenhaModule,
    FiltroAvisoModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    SweetAlert2Module.forRoot(),
    NgbModule
  ],
  providers: [
    LicitacaoService,
    AuthenticationService,
    ComoParticiparService,
    PrincipalService,
    ModalService,
    PagerService,
    EmConfiguracaoService,
    ExpiradoService,
    ProgramadoService,
    PesquisaService,
    GeralService,
    NaoPublicadoService,
    PublicadoService
  ],
  entryComponents: [
    LoginComponent,
    LoginfornecedorComponent,
    DetalhesLicitacaoComponent,
    CadastroFornecedorComponent,
    TrocaSenhaComponent,
    EsqueciSenhaComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() { }
}
