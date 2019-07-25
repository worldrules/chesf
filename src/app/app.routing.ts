import { Routes } from '@angular/router';

import { PrincipalComponent }   from './principal/principal.component';
import { AvisolicitacaoComponent } from './avisolicitacao/avisolicitacao.component';
import { ExpiradosComponent } from './expirados/expirados.component';
import { ComoparticiparComponent } from './comoparticipar/comoparticipar.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { EmConfiguracaoComponent } from './aviso/emconfiguracao/emconfiguracao.component';
import { ExpiradoComponent } from './aviso/expirado/expirado.component';
import { GeralComponent } from './aviso/geral/geral.component';
import { ProgramadoComponent } from './aviso/programado/programado.component';
import { PublicadoComponent } from './aviso/publicado/publicado.component';
import { NaoPublicadoComponent } from './aviso/naopublicado/naopublicado.component';
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
import { GeraisComponent as GeralFornecedor } from './configuracoes/fornecedor/gerais/gerais.component';
import { LogSistemaComponent } from './logsistema/logsistema.component';
import { ModeloParaEmailComponent } from './configuracoes/fornecedor/modeloparaemail/modeloparaemail.component';
import { AuthGuard } from './_infra/_guards/auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full',
    },
    {
        path: 'principal',
        component: PrincipalComponent
    },
    {
        path: 'avisolicitacao',
        component: AvisolicitacaoComponent
    },
    {
        path: 'expirados',
        component: ExpiradosComponent
    },
    {
        path: 'comoparticipar',
        component: ComoparticiparComponent
    },
    {
        path: 'pesquisa',
        component: PesquisaComponent        
    },
    {
        path: 'aviso/emconfiguracao',
        component: EmConfiguracaoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'aviso/expirado',
        component: ExpiradoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'aviso/geral',
        component: GeralComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'aviso/naopublicado',
        component: NaoPublicadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'aviso/programado',
        component: ProgramadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'aviso/publicado',
        component: PublicadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/porrazaosocial',
        component: PorRazaoSocialComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/porsituacao',
        component: PorSituacaoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/inscritosestado',
        component: InscritosEstadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/situacaoporestado',
        component: SituacaoPorEstadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/inscritosporcidade',
        component: InscritosPorCidadeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/porargumento',
        component: PorArgumentoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/enderecodetalhado',
        component: EnderecoDetalhadoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/notificacoes',
        component: NotificacoesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores/basefornecedores',
        component: BaseFornecedoresComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'configuracoes/gerais/gerais',
        component: GeraisComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'configuracoes/gerais/modeloemail',
        component: ModeloEmailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'configuracoes/gerais/listaregionais',
        component: ListaRegionaisComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'configuracoes/gerais/registrodownloads',
        component: RegistroDownloadsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'configuracoes/fornecedor/gerais',
        component: GeralFornecedor,
        canActivate: [AuthGuard]
    },    
    {
        path: 'configuracoes/fornecedor/modeloparaemail',
        component: ModeloParaEmailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'logsistema',
        component: LogSistemaComponent,
        canActivate: [AuthGuard]
    }          
]
