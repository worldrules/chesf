import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../../_common/url';
import { Page } from '../../_model/page';
import { NaoPublicado } from '../../_model/aviso-licitacao/nao.publicado';

@Injectable()

export class NaoPublicadoService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoes(page: Page): Observable<any[]> {
    return this.httpClient.post<NaoPublicado[]>(Url.aviso.naopublicado.recupera, page);
  }

  getTotalLicitacoes(page: Page): Observable<any> {
    return this.httpClient.post<number>(Url.aviso.naopublicado.recuperaTotal, page);
  }

  getDetalhes(nroEdital): Observable<any> {
    return this.httpClient.get<NaoPublicado>(Url.aviso.naopublicado.getDetalhes + '?nroEdital=' + nroEdital );
  }

}
