import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';
import { BootomNewsComponent } from './components/bootom-news/bootom-news.component';
import { BootomCardComponent } from './components/bootom-card/bootom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    BootomNewsComponent,
    BootomCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
