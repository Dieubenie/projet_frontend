import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FestivalComponent } from './components/evenement/festival/festival.component';
import { ConcertComponent } from './components/evenement/concert/concert.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TicketsComponent,
    FestivalComponent,
    ConcertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
