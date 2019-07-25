import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { EsqueciSenhaModule } from '../../../app/modal/esquecisenha/esquecisenha.module';
import { CadastroFornecedorModule } from '../../../app/modal/cadastrofornecedor/cadastrofornecedor.module';

@NgModule({
    imports: [ RouterModule, CommonModule, EsqueciSenhaModule, CadastroFornecedorModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
