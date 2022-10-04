import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EntityState } from '../entity/entity.state';
import { Film } from './film.model';
import { FilmsService } from './films.service';

@Injectable({ providedIn: 'root' })
export class FilmsState extends EntityState<Film> {
  constructor(private filmService: FilmsService) {
    super();
  }

  get selected$() {
    return combineLatest([this.entities$, this.selectedId$]).pipe(
      map(([films, id]) => films.find(h => h.id === id))
    );
  }

  load(): Observable<Film[]> {
    return this.filmService
      .load()
      .pipe(tap(films => this.entities.next(films)));
  }

  save(entity: Film): Observable<Film> {
    return this.filmService
      .save(this.selectedId.value, entity)
      .pipe(
        tap(result =>
          this.entities.next(
            this.entities.value.map(film =>
              film.id === result.id ? result : film
            )
          )
        )
      );
  }
}
