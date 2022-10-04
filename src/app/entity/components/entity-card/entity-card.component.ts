import {
  Component,
  ContentChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { EntityCardController } from './entity-card.controller';
import { EntityFormController } from '../../entity-form.controller';

@Component({
  selector: 'app-entity-card',
  template: `
    <mat-card>
      <ng-container *ngIf="(entityCard.isSelected$ | async); else notSelected">
        <mat-card-title>
          <ng-content select=".header"></ng-content>
        </mat-card-title>
        <mat-card-content>
          <ng-content></ng-content>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="entityCard.save(entityForm.entityForm)">
            SAVE
          </button>
        </mat-card-actions>
      </ng-container>
      <ng-template #notSelected>
        Select Item
      </ng-template>
    </mat-card>
  `,
  styles: [
    `
      .mat-card {
        width: 300px;
        margin: 16px;
      }

      .mat-card-content {
        display: flex;
        flex-direction: column;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EntityCardController]
})
export class EntityCardComponent {
  @ContentChild(EntityFormController) entityForm: EntityFormController<any>;

  constructor(public entityCard: EntityCardController) {}
}
