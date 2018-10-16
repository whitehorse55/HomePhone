import { Component } from '@angular/core';

/**
 * Generated class for the InformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'information',
  templateUrl: 'information.html'
})
export class InformationComponent {

  text: string;

  constructor() {
    console.log('Hello InformationComponent Component');
    this.text = 'Hello World';
  }

}
