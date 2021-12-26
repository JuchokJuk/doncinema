import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() orientation!: string;

  @Input() header!: string;
  @Input() headerLevel!: number;

  @Input() text!: string;
  @Input() number!: string;
  @Input() button!: string;

  @Input() imagePath!: string;
}
