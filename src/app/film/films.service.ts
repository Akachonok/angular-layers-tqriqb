import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from './film.model';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private films: Film[] = [
    { id: '0', title: 'Iron Man', director: '', description: '' },
    { id: '1', title: 'Spider-Man', director: '', description: '' },
    { id: '2', title: 'Avengers', director: '', description: '' }
  ];

  load() {
    return of(this.films);
  }

  save(id: string, film: Film): Observable<Film> {
    return of({ ...film, id });
  }
}
