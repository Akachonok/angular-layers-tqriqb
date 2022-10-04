import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { FilmPageComponent } from "./components/film-page.component";
import { EntityModule } from "../entity/entity.module";



@NgModule({
  declarations: [FilmFormComponent, FilmPageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    EntityModule
  ]
})
export class FilmModule { }
