import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CadastroFornecedorComponent } from './cadastrofornecedor.component';
import Swal from 'sweetalert2';
import { Fornecedor } from '../../../app/_infra/_model/fornecedor';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule, SweetAlert2Module, NgxMaskModule ],
    declarations: [CadastroFornecedorComponent],
    exports: [CadastroFornecedorComponent]
})

export class CadastroFornecedorModule implements OnInit {

    fornecedor: Fornecedor = null;
    tipoPessoa = "Fisica";
    
    ngOnInit() {
        this.fornecedor = new Fornecedor;
    }

    cadastrarFornecedor() {
        console.log(this.fornecedor);
        Swal.fire('Cadastrar Fornecedor', 'Preencha todos os campos antes de continuar', 'error');
      }
 }