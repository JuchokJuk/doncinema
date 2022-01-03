import { Component, Input } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  constructor(private popupService: PopupService) { }
  @Input() imagePath!:string;
  @Input() header!:string;
  @Input() text!: string;
  showPopup(){
    this.popupService.openPopup(this.imagePath, this.header, this.text);
  }
}
