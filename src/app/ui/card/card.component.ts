import { Component, Input } from '@angular/core';
import { PopupService } from '../popup/popup.service';

import { PostComponent } from '../popup/popup-content/post/post.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private popupService: PopupService) { }

  @Input() imagePath!: string;
  @Input() header!: string;
  @Input() text!: string;

  showPopup() {
    const inputs = [
      {
        name: 'imagePath',
        value: this.imagePath
      },
      {
        name: 'header',
        value: this.header
      },
      {
        name: 'text',
        value: this.text
      }
    ];
    this.popupService.openPopup(PostComponent, inputs);
  }
}
