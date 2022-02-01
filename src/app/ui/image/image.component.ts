import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{
  @Input() cover:boolean = false;
  @Input() imagePath!: string;
}