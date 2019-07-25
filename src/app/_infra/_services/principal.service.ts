import { Injectable } from '@angular/core';
import { Url } from '../../../app/_infra/_common/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()

export class PrincipalService {
  constructor(private httpClient: HttpClient) { }

  getPrincipal(): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.principal);
  }

  getPrincipalDescricao(perfil: string): Observable<any[]> {
    return this.httpClient.get<any[]>(Url.descricaoPrincipal + '?perfil=' + perfil);
  }
}
