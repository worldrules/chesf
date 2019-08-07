import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from '../../../app/modal/login/login.component';
import { LoginModule } from '../../../app/modal/login/login.module';
import { TrocaSenhaModule } from '../../../app/modal/trocasenha/trocasenha.module';
import { TrocaSenhaComponent } from '../../../app/modal/trocasenha/trocasenha.component';
import { EsqueciSenhaModule } from '../../../app/modal/esquecisenha/esquecisenha.module';


@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule,
       SweetAlert2Module, LoginModule, TrocaSenhaModule,
        EsqueciSenhaModule ],
    declarations: [NavbarComponent],

    exports: [NavbarComponent],

    entryComponents: [LoginComponent, TrocaSenhaComponent],
})

export class NavbarModule {}

