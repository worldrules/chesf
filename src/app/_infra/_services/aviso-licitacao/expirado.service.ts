import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../../_common/url';
import { Page } from '../../_model/page';
import { Expirado } from '../../_model/aviso-licitacao/expirado';

@Injectable()

export class ExpiradoService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoes(page: Page): Observable<any[]> {
    return this.httpClient.post<Expirado[]>(Url.aviso.expirado.recupera, page);
  }

  getTotalLicitacoes(page: Page): Observable<any> {
    return this.httpClient.post<number>(Url.aviso.expirado.recuperaTotal, page);
  }
  getDetalhes(nroEdital): Observable<any> {
    return this.httpClient.get<Expirado>(Url.aviso.expirado.getDetalhes + '?nroEdital=' + nroEdital );
  }

}
