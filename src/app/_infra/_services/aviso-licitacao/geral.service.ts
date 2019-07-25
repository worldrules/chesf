import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../../_common/url';
import { Page } from '../../_model/page';
import { Geral } from '../../_model/aviso-licitacao/geral';

@Injectable()

export class GeralService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoes(page: Page): Observable<any[]> {
    return this.httpClient.post<Geral[]>(Url.aviso.geral.recupera, page);
  }

  getTotalLicitacoes(page: Page): Observable<any> {
    return this.httpClient.post<number>(Url.aviso.geral.recuperaTotal, page);
  }

  getDetalhes(nroEdital): Observable<any> {
    return this.httpClient.get<Geral>(Url.aviso.geral.getDetalhes + '?nroEdital=' + nroEdital );
  }

}
