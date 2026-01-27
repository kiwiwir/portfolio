import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Domyślnie przekierowanie do Home
  { path: '**', redirectTo: 'home' }, // Obsługa nieznanych ścieżek
];
