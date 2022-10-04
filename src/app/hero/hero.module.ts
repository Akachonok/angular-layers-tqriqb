import { NgModule } from "@angular/core";
import { EntityModule } from "../entity/entity.module";
import { CommonModule } from "@angular/common";
import { HeroFormComponent } from "./components/hero-form/hero-form.component";
import { HeroPageComponent } from "./components/hero-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    imports: [
        CommonModule,
        EntityModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    declarations: [
        HeroFormComponent,
        HeroPageComponent
    ]
})
export class HeroModule {}
