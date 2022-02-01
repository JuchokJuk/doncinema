import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { PostComponent } from '../popup/popup-content/post/post.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private popupService: PopupService) { }

  @Input() cover!: any;
  @Input() header!: string;
  @Input() content!: string;

  contentPreview!: string;

  ngOnInit(): void {
    this.contentPreview = this.extractContent(this.content);
  }

  extractContent(s: string):string {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  }

  showPopup() {
    const inputs = [
      {
        name: 'cover',
        value: this.cover
      },
      {
        name: 'header',
        value: this.header
      },
      {
        name: 'content',
        value: this.content
      }
    ];
    this.popupService.openPopup(PostComponent, inputs);
  }
}
