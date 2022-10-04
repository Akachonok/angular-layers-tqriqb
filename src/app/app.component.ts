import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <nav mat-tab-nav-bar>
            <a mat-tab-link
               *ngFor="let link of navLinks"
               [routerLink]="link.path"
               routerLinkActive #rla="routerLinkActive"
               [active]="rla.isActive">
                {{link.label}}
            </a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
    navLinks = [
        { label: 'Heroes', path: 'heroes' }, { label: 'Films', path: 'films' }
    ]
}
