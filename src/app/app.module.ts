import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { MenuComponent } from './ui/menu/menu.component';
import { HeaderComponent } from './ui/header/header.component';
import { BlockComponent } from './ui/block/block.component';
import { OrbsComponent } from './ui/orbs/orbs.component';
import { ServicesComponent } from './ui/services/services.component';
import { HeadlineComponent } from './ui/headline/headline.component';
import { TabsComponent } from './ui/tabs/tabs.component';
import { SliderComponent } from './ui/slider/slider.component';
import { DiagonalComponent } from './ui/diagonal/diagonal.component';
import { ProjectsComponent } from './ui/projects/projects.component';
import { ImageComponent } from './ui/image/image.component';
import { PartnersComponent } from './ui/partners/partners.component';
import { ContactsComponent } from './ui/contacts/contacts.component';
import { FooterComponent } from './ui/footer/footer.component';
import { PartnerCardComponent } from './ui/partner-card/partner-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './ui/card/card.component';
import { NoImageComponent } from './ui/no-image/no-image.component';
import { PopupComponent } from './ui/popup/popup.component';
import { PostComponent } from './ui/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    BlockComponent,
    OrbsComponent,
    ServicesComponent,
    HeadlineComponent,
    TabsComponent,
    SliderComponent,
    DiagonalComponent,
    ProjectsComponent,
    ImageComponent,
    PartnersComponent,
    ContactsComponent,
    FooterComponent,
    PartnerCardComponent,
    CardComponent,
    NoImageComponent,
    PopupComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
