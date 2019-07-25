import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input() idLicitacao: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.idLicitacao);
  }

}
