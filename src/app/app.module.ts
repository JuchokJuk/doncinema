import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { MenuComponent } from './ui/menu/menu.component';
import { HeaderComponent } from './ui/header/header.component';
import { CardComponent } from './ui/card/card.component';
import { OrbsComponent } from './ui/orbs/orbs.component';
import { ProjectsComponent } from './ui/projects/projects.component';
import { HeadlineComponent } from './ui/headline/headline.component';
import { TabsComponent } from './ui/tabs/tabs.component';
import { SliderComponent } from './ui/slider/slider.component';
import { DiagonalComponent } from './ui/diagonal/diagonal.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CardComponent,
    OrbsComponent,
    ProjectsComponent,
    HeadlineComponent,
    TabsComponent,
    SliderComponent,
    DiagonalComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
