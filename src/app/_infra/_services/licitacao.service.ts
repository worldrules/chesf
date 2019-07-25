import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../_common/url';

@Injectable()

export class LicitacaoService {
  constructor(private httpClient: HttpClient) { }

  getLicitacoesAtivas(pagina: number, total: number): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.avisoLicitacao.getLicitacoesAtivas + '?pagina=' + pagina + '&total=' + total);
  }

  getTotalLicitacoesAtivas(): Observable<any> {
    return this.httpClient.get<any>(Url.avisoLicitacao.getTotalLicitacoesAtivas);
  }

  getLicitacoesInativas(pagina: number, total: number): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.avisoLicitacao.getLicitacoesInativas + '?pagina=' + pagina + '&total=' + total);
  }

  getTotalLicitacoesInativas(): Observable<any> {
    return this.httpClient.get<any>(Url.avisoLicitacao.getTotalLicitacoesInativas + '');
  }

  getLicitacaoDetalhes(id: string){
    return this.httpClient.get<any>(Url.avisoLicitacao.getLicitacaoDetalhes + '?id=' + id);
  }
}
