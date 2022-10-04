import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntityPageComponent } from "./components/entity-page.component";
import { EntityListComponent } from "./components/entity-list/entity-list.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { EntityCardComponent } from "./components/entity-card/entity-card.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    imports: [CommonModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatSnackBarModule],
    exports: [
        EntityPageComponent,
        EntityCardComponent
    ],
    declarations: [
        EntityPageComponent,
        EntityListComponent,
        EntityCardComponent
    ]
})
export class EntityModule {}
