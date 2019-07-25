import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../../_common/url';
import { Page } from '../../_model/page';
import { EmConfiguracao } from '../../_model/aviso-licitacao/emConfiguracao/em.configuracao';
import { SalvaDataLicitacao } from '../../_model/aviso-licitacao/emConfiguracao/salvadatalicitacao';


@Injectable()

export class EmConfiguracaoService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoes(page: Page): Observable<any[]> {
    return this.httpClient.post<EmConfiguracao[]>(Url.aviso.emConfiguracao.recupera, page);
  }

  getTotalLicitacoes(page: Page): Observable<any> {
    return this.httpClient.post<number>(Url.aviso.emConfiguracao.recuperaTotal, page);
  }
  salvaDataLicitacao(salvaDataLicitacao): Observable<any> {
    return this.httpClient.post<SalvaDataLicitacao>(Url.aviso.emConfiguracao.salvaDataLicitacao, salvaDataLicitacao);
  }
  getDetalhes(nroEdital): Observable<any> {
    return this.httpClient.get<EmConfiguracao>(Url.aviso.emConfiguracao.getDetalhes + '?nroEdital=' + nroEdital );
  }
}
