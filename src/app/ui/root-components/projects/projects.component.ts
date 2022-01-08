import { Component } from '@angular/core';
import { ModelService } from 'src/app/model/model.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private modelService: ModelService) { }
  projects = this.modelService.projects;
}
