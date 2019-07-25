import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../../_common/url';
import { Page } from '../../_model/page';
import { Programado } from '../../_model/aviso-licitacao/programado';

@Injectable()

export class ProgramadoService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoes(page: Page): Observable<any[]> {
    return this.httpClient.post<Programado[]>(Url.aviso.programado.recupera, page);
  }

  getTotalLicitacoes(page: Page): Observable<any> {
    return this.httpClient.post<number>(Url.aviso.programado.recuperaTotal, page);
  }
  
  getDetalhes(nroEdital): Observable<any> {
    return this.httpClient.get<Programado>(Url.aviso.programado.getDetalhes + '?nroEdital=' + nroEdital );
  }

}
