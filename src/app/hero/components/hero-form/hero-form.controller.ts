import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { EntityFormController } from '../../../entity/entity-form.controller';
import { Hero } from '../../hero.model';

@Injectable()
export class HeroFormController extends EntityFormController<Hero> {
    entityForm = this.fb.group({
        name: ['', Validators.required],
        power: ['', Validators.required],
        story: ['']
    })
}
