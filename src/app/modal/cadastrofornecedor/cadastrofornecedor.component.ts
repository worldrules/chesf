import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../../app/_infra/_model/fornecedor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrofornecedor',
  templateUrl: './cadastrofornecedor.component.html',
  styleUrls: ['./cadastrofornecedor.component.scss']
})
export class CadastroFornecedorComponent implements OnInit {
  tipoPessoa = 'Jurídico';
  fornecedor: Fornecedor = null;

  constructor() { }

  ngOnInit() {
    this.fornecedor = new Fornecedor;
  }

  mudaTipoPessoa() {
    this.fornecedor = new Fornecedor();
  }

  cadastrarFornecedor() {
    if(this.validaInformacoes()){
      Swal.fire('Sucesso!', 'As informações do fornecedor foram enviadas para a CHESF. Após análise voce será notificado.', 'success');
    }
  }

  validaInformacoes() {
    if (this.fornecedor.nome == '' || this.fornecedor.nome == null) {
      Swal.fire('Atenção', 'Você deve informar um nome para esse Fornecedor', 'warning');
      return false;
    }

    if (this.fornecedor.cnpj == '' || this.fornecedor.cnpj == null) {
      if (this.tipoPessoa == 'Jurídico') {
        Swal.fire('Atenção', 'Você deve informar um CNPJ para esse Fornecedor', 'warning');
        return false;
      }

      if (this.fornecedor.cnpj == '' || this.fornecedor.cnpj == null) {
        if (this.tipoPessoa == 'Fisica') {
          Swal.fire('Atenção', 'Você deve informar um CPF para esse Fornecedor', 'warning');
          return false;
        }
      }

      if (this.fornecedor.telefone == '' || this.fornecedor.telefone == null) {
        Swal.fire('Atenção', 'Você deve informar um telefone para esse Fornecedor', 'warning');
        return false;
      }

      if (this.fornecedor.email == '' || this.fornecedor.email == null) {        
        Swal.fire('Atenção', 'Você deve informar um email para esse Fornecedor', 'warning');
        return false;
      }
    }

    return true;
  }
}