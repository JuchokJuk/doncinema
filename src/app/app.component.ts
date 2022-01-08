import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModelService } from './model/model.service';
import { PopupService } from './ui/popup/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('popupContentContainer', { read: ViewContainerRef })
  popupContentContainer!: ViewContainerRef;

  constructor(private popupService: PopupService, private modelService: ModelService) { }

  blocks!: block[];
  @ViewChild('header', { static: false }) header!: ElementRef;
  @ViewChild('services', { static: false }) services!: ElementRef;
  @ViewChild('projects', { static: false }) projects!: ElementRef;
  @ViewChild('partners', { static: false }) partners!: ElementRef;
  @ViewChild('contacts', { static: false }) contacts!: ElementRef;

  ngAfterViewInit() {
    this.popupService.popupContentContainer = this.popupContentContainer;

    this.blocks = [
      {
        title: this.modelService.about.title,
        element: this.header
      },
      {
        title: this.modelService.services.title,
        element: this.services
      },
      {
        title: this.modelService.projects.title,
        element: this.projects
      },
      {
        title: this.modelService.partners.title,
        element: this.partners
      },
      {
        title: this.modelService.contacts.title,
        element: this.contacts
      }
    ]
  }
}
interface block {
  title: string;
  element: ElementRef;
}