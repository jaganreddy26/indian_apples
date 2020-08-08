import { Injectable, EventEmitter } from '@angular/core';//injectable represents it is a service
import { DomSanitizer } from '@angular/platform-browser';//bypassSecurityTrust
import { MatSnackBar } from '@angular/material/snack-bar';
//service decorator
@Injectable()
export class ApexService {
    alerts: any = [];
    sessionUserEvent: EventEmitter<any> = new EventEmitter();
    menuEvent: EventEmitter<any> = new EventEmitter();
    loaderEvent: EventEmitter<any> = new EventEmitter();
    contactEvent: EventEmitter<any> = new EventEmitter();
    constructor(private _domSanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    }
    showMessage(message: string, action?: string, cssConfig?: string) {
        this.snackBar.open(message, action, {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: [cssConfig]
        });
    }

    dismissSnackBar() {
        this.snackBar.dismiss();
    }

    showError(errMsg: string, configForm?: any, formField?: string): boolean {
        if (formField) {
            configForm.form.controls[formField].setErrors({ 'incorrect': true });
        }
        this.showMessage(errMsg, 'X', 'style-error');
        return false;
    }
}