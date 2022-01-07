import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  @Input() imagePath!:string;
  @Input() header!:string;
  @Input() text!: string;
}
