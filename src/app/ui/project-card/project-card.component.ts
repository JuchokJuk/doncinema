import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() header!: string;
  @Input() headerLevel!: number;

  @Input() text!: string;
  @Input() number!: string;
  @Input() button!: string;

  @Input() imagePath!: string;
}
