import { Injectable } from '@angular/core';
import { EntityState } from '../../entity.state';
import { FormGroup } from '@angular/forms';
import { map } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class EntityCardController {
    isSelected$ = this.entityState.selectedId$.pipe(map(id => id !== null));

    constructor(private entityState: EntityState<any>, private snackBar: MatSnackBar) {
    }

    save(form: FormGroup) {
        this.entityState.save(form.value).subscribe({
            next: () => this.snackBar.open('Saved successfully', null, { duration: 2000 }),
            error: () => this.snackBar.open('Error occurred while saving', null, { duration: 2000 })
        })
    }
}
