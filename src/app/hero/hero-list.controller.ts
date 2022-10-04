import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { EntityListController } from "../entity/components/entity-list/entity-list.controller";
import { Hero } from "./hero.model";

@Injectable()
export class HeroListController extends EntityListController<Hero> {
    entityList$ = this.entityState.entities$.pipe(
        map(heroes => heroes.map(h => ({ value: h.id, label: h.name })))
    );
}
