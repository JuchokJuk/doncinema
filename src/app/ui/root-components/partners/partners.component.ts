import { Component } from '@angular/core';
import { ModelService} from 'src/app/model/model.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  constructor(private modelService: ModelService) {}
  partners = this.modelService.partners;
}
