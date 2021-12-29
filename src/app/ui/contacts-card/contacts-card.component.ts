import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.css']
})
export class ContactsCardComponent {
  @Input() header!: string;

  @Input() list!: string[];
  @Input() number!: string;
  @Input() button!: string;
}
