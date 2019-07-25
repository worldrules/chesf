import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDateStruct, NgbCalendar, NgbInputDatepicker, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-filtro-aviso',
  templateUrl: './filtro.aviso.component.html',
  styleUrls: ['./filtro.aviso.component.scss']
})

export class FiltroAvisoComponent implements OnInit {
  constructor() { }
  
  ngOnInit() { }  
  
}
