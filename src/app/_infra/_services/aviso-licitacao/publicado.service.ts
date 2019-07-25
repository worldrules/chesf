import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../../_common/url';
import { Page } from '../../_model/page';
import { Publicado } from '../../_model/aviso-licitacao/publicado';

@Injectable()

export class PublicadoService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoes(page: Page): Observable<any[]> {
    return this.httpClient.post<Publicado[]>(Url.aviso.publicado.recupera, page);
  }

  getTotalLicitacoes(page: Page): Observable<any> {
    return this.httpClient.post<number>(Url.aviso.publicado.recuperaTotal, page);
  }
  getDetalhes(nroEdital): Observable<any> {
    return this.httpClient.get<Publicado>(Url.aviso.publicado.getDetalhes + '?nroEdital=' + nroEdital );
  }

}
