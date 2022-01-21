import { Component, Input} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{
  @Input() cover:boolean = false;
  @Input() imagePath!: SafeResourceUrl;
  ngAfterViewInit(){
    console.log(this.imagePath)
  }
}