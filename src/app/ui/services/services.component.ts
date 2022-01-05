import { Component, OnInit } from '@angular/core';

import { ModelService, Services } from 'src/app/model/model.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(private modelService: ModelService) {}
  services:Services = this.modelService.services;


  ngOnInit(): void {
  }

}