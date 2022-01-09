import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { MenuComponent } from './ui/root-components/menu/menu.component';
import { HeaderComponent } from './ui/root-components/header/header.component';
import { BlockComponent } from './ui/block/block.component';
import { OrbsComponent } from './ui/orbs/orbs.component';
import { ServicesComponent } from './ui/root-components/services/services.component';
import { HeadlineComponent } from './ui/headline/headline.component';
import { TabsComponent } from './ui/tabs/tabs.component';
import { SliderComponent } from './ui/slider/slider.component';
import { ProjectsComponent } from './ui/root-components/projects/projects.component';
import { ImageComponent } from './ui/image/image.component';
import { PartnersComponent } from './ui/root-components/partners/partners.component';
import { ContactsComponent } from './ui/root-components/contacts/contacts.component';
import { FooterComponent } from './ui/footer/footer.component';
import { PartnerCardComponent } from './ui/partner-card/partner-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './ui/card/card.component';
import { NoImageComponent } from './ui/no-image/no-image.component';
import { PopupComponent } from './ui/popup/popup/popup.component';
import { PostComponent } from './ui/popup/popup-content/post/post.component';
import { CallFormComponent } from './ui/popup/popup-content/call-form/call-form.component';
import { StarComponent } from './ui/star/star.component';
import { ButtonComponent } from './ui/button/button.component';

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
    CallFormComponent,
    StarComponent,
    ButtonComponent,
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
