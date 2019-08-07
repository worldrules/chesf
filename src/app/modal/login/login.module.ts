import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from '../../../app/modal/login/login.component';

@NgModule({
    imports: [ RouterModule, CommonModule, FormsModule, SweetAlert2Module ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule {}
