import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safe',
  pure: false
})
export class SafePipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {
  }

  transform(value: any): any {
    console.log('PIPE value: ', value);
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

}
