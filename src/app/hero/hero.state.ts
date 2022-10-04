import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { EntityState } from '../entity/entity.state';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HeroState extends EntityState<Hero> {
  constructor(private heroService: HeroService) {
    super();
  }

  get selected$() {
    return combineLatest([this.entities$, this.selectedId$]).pipe(
      map(([heroes, id]) => heroes.find(h => h.id === id))
    );
  }

  load(): Observable<Hero[]> {
    return this.heroService
      .load()
      .pipe(tap(heroes => this.entities.next(heroes)));
  }

  save(entity: Hero): Observable<Hero> {
    return this.heroService
      .save(this.selectedId.value, entity)
      .pipe(
        tap(result =>
          this.entities.next(
            this.entities.value.map(hero =>
              hero.id === result.id ? result : hero
            )
          )
        )
      );
  }
}
