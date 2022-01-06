import { Component } from '@angular/core';
import { ModelService, About } from 'src/app/model/model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private modelService: ModelService) { }
  about: About = this.modelService.about;


}
