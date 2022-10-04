import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EntityState } from '../../entity/entity.state';
import { FilmsState } from '../films.state';
import { EntityListController } from '../../entity/components/entity-list/entity-list.controller';
import { FilmsListController } from '../films-list.controller';

@Component({
  selector: 'app-film-page',
  template: `
    <app-entity-page>
      <app-entity-card>
        <span class="header">Film</span>
        <app-film-form></app-film-form>
      </app-entity-card>
    </app-entity-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: EntityState, useExisting: FilmsState },
    { provide: EntityListController, useClass: FilmsListController }
  ]
})
export class FilmPageComponent {}
