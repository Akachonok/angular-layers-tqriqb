import { Component } from '@angular/core';

@Component({
  selector: 'app-entity-page',
  template: `
      <mat-sidenav-container>
          <mat-sidenav opened mode="side">
              <app-entity-list></app-entity-list>
          </mat-sidenav>
          <ng-content></ng-content>
      </mat-sidenav-container>
  `,
  styles: [`
               .mat-sidenav-container {
                   height: 500px;
               }
           `],
})
export class EntityPageComponent {
}
