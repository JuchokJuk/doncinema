import { Pipe, PipeTransform } from '@angular/core';
import { Backend } from './backend';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {
  backend:Backend = new Backend();
  transform(value: string): string {
    // return this.backend.backendDomain + value;
    return value;
  }
}