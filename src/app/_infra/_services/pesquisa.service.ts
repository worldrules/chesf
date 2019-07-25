import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../_common/url';
import { Page } from '../_model/page';

@Injectable()

export class PesquisaService {
  constructor(private httpClient: HttpClient) { }

  getPesquisa(page: Page): Observable<any[]> {
    return this.httpClient.post<any[]>(Url.pesquisa.resultado, page);
  }

  getTotalPesquisa(page: Page): Observable<any> {
    return this.httpClient.post<any>(Url.pesquisa.total, page);
  }
}
