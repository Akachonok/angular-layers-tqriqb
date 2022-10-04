import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { EntityFormController } from '../../../entity/entity-form.controller';
import { Film } from '../../film.model';

@Injectable()
export class FilmFormController extends EntityFormController<Film> {
    entityForm = this.fb.group({
        title: ['', Validators.required],
        director: ['', Validators.required],
        description: ['']
    })
}
