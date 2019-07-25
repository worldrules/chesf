import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { Usuario } from '../_model/usuario';
import { Fornecedor } from '../_model/fornecedor';
import { Url } from '../_common/url';

@Injectable()
export class AuthenticationService {
  //CurrentUser login EMISSÃO EDITAL
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  
  //Current User login AD INTRANET
  public currentUserADSubject: BehaviorSubject<Usuario>;
  public currentUserAD: Observable<Usuario>;
  public userAD = new Subject<any>();

  public currentFornecedorSubject: BehaviorSubject<Fornecedor>;
  public currentFornecedor: Observable<Fornecedor>;
  
  constructor(private http: HttpClient) {    
    this.currentUserSubject = new BehaviorSubject<Usuario>(
      JSON.parse(localStorage.getItem('currentUser'))
    );

    this.currentFornecedorSubject = new BehaviorSubject<Fornecedor>(
      JSON.parse(localStorage.getItem('currentFornecedor'))
    );

    this.currentUser = this.currentUserSubject.asObservable();
    this.currentFornecedor = this.currentFornecedorSubject.asObservable();
    
    //This AD
    this.currentUserADSubject = new BehaviorSubject<Usuario>(
      JSON.parse(localStorage.getItem('currentUserAD'))
    );

    this.currentFornecedorSubject = new BehaviorSubject<Fornecedor>(
      JSON.parse(localStorage.getItem('currentFornecedor'))
    );

    this.currentUserAD = this.currentUserADSubject.asObservable();
    this.currentFornecedor = this.currentFornecedorSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  public get currentFornecedorValue(): Fornecedor {
    return this.currentFornecedorSubject.value;
  }

  public get currentUserADValue(): Usuario {
    return this.currentUserADSubject.value;
  }

  getUsuarioAutenticado() {
    return this.currentUserAD;
  }

  loginAD(usuario: string, senha: string) {
    const header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');

    return this.http.post(Url.login.chesf.validarAD, { 'usuario': usuario, 'senha': senha }, { headers: header });
  }

  loginFornecedor(usuario: string, senha: string) {
    const header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');

    return this.http.post(Url.login.fornecedor.validar, { 'usuario': usuario, 'senha': senha }, { headers: header });
  }

  loginTrocaSenha(usuario: string, senha: string, novaSenha: string){
    const header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');

    return this.http.post(Url.login.fornecedor.trocaSenha, { 'usuario': usuario, 'senha': senha, 'novaSenha': novaSenha }, { headers: header });
  }

  loginNovaSenha(usuario: string) {
    const header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');

    return this.http.post(Url.login.fornecedor.novaSenha, { 'usuario': usuario }, { headers: header });
  }

  logout() {
    localStorage.clear();

    this.currentUserADSubject.next(null);
    this.currentFornecedorSubject.next(null);
  }
}
