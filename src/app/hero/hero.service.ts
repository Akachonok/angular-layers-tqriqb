import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroes: Hero[] = [
    { id: '0', name: 'Iron Man', story: '', power: '' },
    { id: '1', name: 'Spider-Man', story: '', power: '' },
    { id: '2', name: 'Vision', story: '', power: '' }
  ];

  load() {
    return of(this.heroes);
  }

  save(id: string, hero: Hero): Observable<Hero> {
    return of({ ...hero, id });
  }
}
