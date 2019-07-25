import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Url } from '../_common/url';

@Injectable()

export class ComoParticiparService {
  constructor(private httpClient: HttpClient) { }

  getComoParticipar(): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.comoParticipar);
  }

  getComoParticiparDescricao(perfil: string): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.descricaoComoParticipar + '?perfil=' + perfil);
  }
}
