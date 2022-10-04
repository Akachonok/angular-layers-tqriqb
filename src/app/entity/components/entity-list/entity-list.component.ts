import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EntityListController } from './entity-list.controller';

@Component({
  selector: 'app-entity-list',
  template: `
    <mat-selection-list
      [multiple]="false"
      (selectionChange)="entityList.select($event.options[0].value)"
    >
      <mat-list-option
        *ngFor="let item of (entityList.entityList$ | async)"
        [selected]="item.value === (entityList.selected$ | async)"
        [value]="item.value"
      >
        {{ item.label }}
      </mat-list-option>
    </mat-selection-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityListComponent {
  constructor(public entityList: EntityListController<any>) {
    this.entityList.initialize();
  }
}
