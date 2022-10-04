import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityState } from '../../entity.state';

export interface Entity {
  value: string;
  label: string;
}

@Injectable()
export abstract class EntityListController<T> {
  selected$ = this.entityState.selectedId$;

  constructor(protected entityState: EntityState<T>) {}

  abstract get entityList$(): Observable<Entity[]>;

  select(value: string) {
    this.entityState.select(value);
  }

  initialize() {
    this.entityState.load().subscribe();
  }
}
