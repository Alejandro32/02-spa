import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { VillanoComponent } from './components/villano/villano.component';


// Rutas//
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './servicios/heroes.service';
import { VillanosService } from './servicios/villanos.services';
import { BuscadorComponent } from './components/buscador/buscador.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    VillanosComponent,
    VillanoComponent,
    BuscadorComponent,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
   ],
  providers: [
    HeroesService,
    VillanosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
