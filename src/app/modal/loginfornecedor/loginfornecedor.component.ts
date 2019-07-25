import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../../app/_infra/_model/fornecedor';

@Component({
  selector: 'app-loginfornecedor',
  templateUrl: './loginfornecedor.component.html',
  styleUrls: ['./loginfornecedor.component.scss']
})
export class LoginfornecedorComponent implements OnInit {

  fornecedor: Fornecedor = null;
  loading = false;
  
  constructor() { }

  ngOnInit() {
    this.fornecedor = new Fornecedor;
  }

}
