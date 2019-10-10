import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Routings } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ControlComponent } from './shared/control/control.component';
import { BoardComponent } from './board/board.component';
import { RotorComponent } from './board/shared/rotor/rotor.component';
import { SplashComponent } from './shared/splash/splash.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlComponent,
    BoardComponent,
    RotorComponent,
    SplashComponent,
    ScoreComponent
  ],
  imports: [
    Routings,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
