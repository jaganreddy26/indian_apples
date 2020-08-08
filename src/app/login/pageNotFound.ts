import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'page-not-found',
    template: `
    <div id="outer">
        <div id="notFoundInner">
            <mat-card-content>
                <div fxLayout="row wrap" fxLayoutAlign="center center" fxLayout.xs="column" fxLayout.sm="column">
                    <span class="pageNotFound">Page Not Found</span>
                    <div class="example-button-row">
                        <button mat-button color="primary" (click)="backToLogin()">Back To Login</button>
                    </div>
                </div>
            </mat-card-content>
        </div>
    </div>
    `,
    styleUrls: ['./login.component.css']
})
export class PageNotFoundComponent {
    constructor(private router: Router) {}
    backToLogin () {
        localStorage.removeItem('access_token')
        this.router.navigate(['/']);
    }
}