import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupService } from './ui/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('popupContentContainer', { read: ViewContainerRef })
  popupContentContainer!: ViewContainerRef;
  constructor(private popupService: PopupService) { }

  ngAfterViewInit(){
    this.popupService.popupContentContainer = this.popupContentContainer;
  }
}
