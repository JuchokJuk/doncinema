import { Component, Input } from '@angular/core';
import { PopupService } from '../popup/popup.service';

import { PostComponent } from '../popup/popup-content/post/post.component';
import { Media } from 'src/app/model/model.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private popupService: PopupService) { }

  @Input() media!: Media;
  @Input() header!: string;
  @Input() text!: string;

  preview: string = "";

  showPopup() {
    const inputs = [
      {
        name: 'media',
        value: this.media
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
