import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LineComponent } from './components/line/line.component';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GamesComponent } from './pages/games/games.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

import { SocialsComponent } from './components/socials/socials.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LineComponent,
    SocialsComponent,
    HomepageComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    GamesComponent,
    ContactsComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Angular Material
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
