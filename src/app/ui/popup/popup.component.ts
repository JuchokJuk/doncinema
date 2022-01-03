import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private popupService: PopupService) { }

  isPopupOpened(): boolean {
    return this.popupService.popupIsOpened;
  }

getImagePath():string{
  return this.popupService.imagePath;
}
getHeader():string{
  return this.popupService.header;
}
getText():string{
  return this.popupService.text;
}


  @ViewChild('popup', { static: false }) popup!: ElementRef;
  @ViewChild('popupContainer', { static: false }) popupContainer!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(this.popupService.popupIsOpened){

      if(!this.popup.nativeElement.contains(event.target) && this.popupContainer.nativeElement.contains(event.target)) {
        this.popupService.closePopup();
      }
    }
  }
}
