import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { OrbsComponent } from './orbs/orbs.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeadlineComponent } from './headline/headline.component';
import { TabsComponent } from './tabs/tabs.component';
import { SliderComponent } from './slider/slider.component';
import { DiagonalComponent } from './diagonal/diagonal.component';


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
