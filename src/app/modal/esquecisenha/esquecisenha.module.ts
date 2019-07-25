import { NgModule, OnInit, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EsqueciSenhaComponent } from './esquecisenha.component';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule, SweetAlert2Module ],
    declarations: [EsqueciSenhaComponent],
    exports: [EsqueciSenhaComponent]
})

export class EsqueciSenhaModule { }

