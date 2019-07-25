import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FiltroAvisoComponent } from './filtro.aviso.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule, SweetAlert2Module, NgbModule ],
    declarations: [FiltroAvisoComponent],
    exports: [FiltroAvisoComponent]
})

export class FiltroAvisoModule implements OnInit {    
    ngOnInit() {
        
    }
 }