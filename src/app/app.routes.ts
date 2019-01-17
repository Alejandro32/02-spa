import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';




const APP_ROUTES: Routes = [
    {path: 'Inicio', component: HomeComponent },
    {path: 'Acerca_de', component: AboutComponent },
    {path: 'Heroes', component: HeroesComponent },
    {path: 'heroe/:id', component: HeroeComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


