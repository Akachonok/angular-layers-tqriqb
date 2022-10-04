import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EntityState } from '../../entity/entity.state';
import { HeroState } from '../hero.state';
import { EntityListController } from '../../entity/components/entity-list/entity-list.controller';
import { HeroListController } from '../hero-list.controller';

@Component({
  selector: 'app-hero-page',
  template: `
    <app-entity-page>
      <app-entity-card>
        <span class="header">Hero</span>
        <app-hero-form></app-hero-form>
      </app-entity-card>
    </app-entity-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: EntityState, useExisting: HeroState },
    { provide: EntityListController, useClass: HeroListController }
  ]
})
export class HeroPageComponent {}
