import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class ModalService {
    isShowing = false;

    open(id: string, value: any = null) {
        this.isShowing = true;

        $('#' + id).modal({
            show: true,
            keyboard: false,
            backdrop: false
        });        
    }

    close(id: string) {
        $('#' + id).modal('hide');
    }
}