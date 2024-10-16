import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LineComponent } from './components/line/line.component';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

import { SocialsComponent } from './components/socials/socials.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { Modellazione3dComponent } from './pages/modellazione3d/modellazione3d.component';
import { BackToTopComponent } from './components/buttons/back-to-top/back-to-top.component';
import { Page404Component } from './pages/page404/page404.component';
import { FooterComponent } from './components/footer/footer.component';


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
    ContactsComponent,
    ProjectCardComponent,
    Modellazione3dComponent,
    BackToTopComponent,
    Page404Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Angular Material
    MatMenuModule,
    MatTabsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
