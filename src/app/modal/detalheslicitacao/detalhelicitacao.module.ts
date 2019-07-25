import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DetalhesLicitacaoComponent } from './detalheslicitacao.component';
import { LoginFornecedorModule } from '../loginfornecedor/loginfornecedor.module';
import { CadastroFornecedorModule } from '../cadastrofornecedor/cadastrofornecedor.module';
import { DownloadModule } from '../../../app/common/download/download.module';

@NgModule({
    imports: [ 
        RouterModule,
        CommonModule, 
        FormsModule, 
        SweetAlert2Module, 
        LoginFornecedorModule, 
        CadastroFornecedorModule,
        DownloadModule
    ],
    declarations: [
        DetalhesLicitacaoComponent
    ],
    exports: [
        DetalhesLicitacaoComponent
    ]
})

export class DetalhesLicitacaoModule { }