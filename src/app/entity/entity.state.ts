import { BehaviorSubject, Observable } from 'rxjs';

export abstract class EntityState<T> {
  protected entities = new BehaviorSubject<T[]>([]);

  protected selectedId = new BehaviorSubject(null);

  get entities$() {
    return this.entities.asObservable();
  }

  get selectedId$(): Observable<string> {
    return this.selectedId.asObservable();
  }

  abstract get selected$(): Observable<T>;

  select(id: string) {
    this.selectedId.next(id);
  }

  abstract load(): Observable<T[]>;

  abstract save(entity: T): Observable<T>;
}
