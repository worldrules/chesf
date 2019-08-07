import { AuthenticationService } from './../_infra/_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioInicial } from '../_infra/_model/usuarioinicial';

@Component({
  selector: 'app-logsistema',
  templateUrl: './logsistema.component.html',
  styleUrls: ['./logsistema.component.scss']
})
export class LogSistemaComponent implements OnInit {

  private usuario: UsuarioInicial = new UsuarioInicial();

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
  }

 

}
