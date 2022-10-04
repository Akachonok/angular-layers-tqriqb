import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EntityFormController } from '../../../entity/entity-form.controller';
import { Film } from '../../film.model';
import { FilmFormController } from './film-form.controller';

@Component({
  selector: 'app-film-form',
  template: `
    <ng-container [formGroup]="filmsForm.entityForm">
      <mat-form-field>
        <mat-label>Title</mat-label>
        <input matInput formControlName="title" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Director</mat-label>
        <input matInput formControlName="director" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Description</mat-label>
        <textarea matInput formControlName="description"></textarea>
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
  providers: [{ provide: EntityFormController, useClass: FilmFormController }]
})
export class FilmFormComponent {
  constructor(public filmsForm: EntityFormController<Film>) {
    this.filmsForm.initialize();
  }
}
