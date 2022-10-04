import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroPageComponent } from './hero/components/hero-page.component';
import { FilmPageComponent } from './film/components/film-page.component';

const routes: Routes = [
  { path: 'heroes', component: HeroPageComponent },
  { path: 'films', component: FilmPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
