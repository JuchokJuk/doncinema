import { Component } from '@angular/core';

import { ModelService } from 'src/app/model/model.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private modelService: ModelService) {}
  services = this.modelService.services;
}
