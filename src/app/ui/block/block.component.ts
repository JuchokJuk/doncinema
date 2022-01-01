import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  @Input() orientation!: string;

  @Input() header!: string;
  @Input() headerLevel!: number;

  @Input() text!: string;
  @Input() number!: string;
  @Input() button!: string;

  @Input() imagePath!: string;
}
