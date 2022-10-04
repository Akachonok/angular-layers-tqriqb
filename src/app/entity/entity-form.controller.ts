import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityState } from './entity.state';

@Injectable()
export abstract class EntityFormController<T> {
    abstract get entityForm(): FormGroup;

    constructor(protected entityState: EntityState<T>, protected fb: FormBuilder) {}

    initialize() {
        this.entityState.selected$.subscribe((entity) => this.entityForm.reset(entity ?? {}));
    }
}
