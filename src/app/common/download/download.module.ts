import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DownloadComponent } from './download.component';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule, SweetAlert2Module ],
    declarations: [DownloadComponent],
    exports: [DownloadComponent]
})

export class DownloadModule implements OnInit {    
    ngOnInit() {
        
    }
 }