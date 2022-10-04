import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EntityListController } from '../entity/components/entity-list/entity-list.controller';
import { Film } from './film.model';

@Injectable()
export class FilmsListController extends EntityListController<Film> {
    entityList$ = this.entityState.entities$.pipe(
        map(films => films.map(f => ({ value: f.id, label: f.title })))
    )
}
