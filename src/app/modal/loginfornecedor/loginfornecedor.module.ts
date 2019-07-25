import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginfornecedorComponent } from './loginfornecedor.component';
import Swal from 'sweetalert2';

@NgModule({
    imports: [RouterModule, CommonModule, FormsModule, SweetAlert2Module],
    declarations: [LoginfornecedorComponent],
    exports: [LoginfornecedorComponent]
})

export class LoginFornecedorModule {

    logarFornecedor() {
        Swal.fire('Credenciado', 'Usuário ou senha estão incorreto(s)!', 'error');
    }
}