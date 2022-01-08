import { Component, OnInit } from '@angular/core';
import { ModelService, Projects } from 'src/app/model/model.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private modelService: ModelService) {}
  projects:Projects = this.modelService.projects.content;


  ngOnInit(): void {
  }

}
