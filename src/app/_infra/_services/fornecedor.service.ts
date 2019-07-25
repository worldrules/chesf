import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../_common/url';

@Injectable()

export class FornecedorService {
  constructor(private httpClient: HttpClient) { }

  inscreverFornecedor(): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.fornecedor.inscrever);
  }
}
