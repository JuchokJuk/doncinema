import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { MenuComponent } from './ui/root-components/menu/menu.component';
import { AboutComponent } from './ui/root-components/about/about.component';
import { ServicesComponent } from './ui/root-components/services/services.component';
import { HeadlineComponent } from './ui/headline/headline.component';
import { ProjectsComponent } from './ui/root-components/projects/projects.component';
import { PartnersComponent } from './ui/root-components/partners/partners.component';
import { ContactsComponent } from './ui/root-components/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './ui/card/card.component';
import { PopupComponent } from './ui/popup/popup/popup.component';
import { PostComponent } from './ui/popup/popup-content/post/post.component';
import { CallFormComponent } from './ui/popup/popup-content/call-form/call-form.component';

import { ButtonComponent } from './ui/basic/button/button.component';
import { ImageComponent } from './ui/image/image.component';
import { NoImageComponent } from './ui/no-image/no-image.component';

import { ImageUrlPipe } from './model/image-url.pipe';
import { SafePipe } from './model/safe.pipe';
import { PartnerComponent } from './ui/partner/partner.component';
import { InputComponent } from './ui/basic/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ServicesComponent,
    HeadlineComponent,
    ProjectsComponent,
    PartnersComponent,
    ContactsComponent,
    CardComponent,
    PopupComponent,
    PostComponent,
    CallFormComponent,
    ButtonComponent,
    ImageComponent,
    NoImageComponent,
    ImageUrlPipe,
    SafePipe,
    PartnerComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
