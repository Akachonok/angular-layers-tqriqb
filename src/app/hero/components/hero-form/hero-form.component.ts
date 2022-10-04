import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EntityFormController } from '../../../entity/entity-form.controller';
import { Hero } from '../../hero.model';
import { HeroFormController } from './hero-form.controller';

@Component({
  selector: 'app-hero-form',
  template: `
    <ng-container [formGroup]="heroForm.entityForm">
      <mat-form-field>
        <mat-label>Hero Name</mat-label>
        <input matInput formControlName="name" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Power</mat-label>
        <input matInput formControlName="power" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Story</mat-label>
        <input matInput formControlName="story" />
      </mat-form-field>
    </ng-container>
  `,
  styles: [
    `
      .mat-form-field {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: EntityFormController, useClass: HeroFormController }]
})
export class HeroFormComponent {
  constructor(public heroForm: EntityFormController<Hero>) {
    this.heroForm.initialize();
  }
}
