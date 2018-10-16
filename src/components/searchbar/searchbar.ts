import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent {

  @Output() inputserach : EventEmitter<any> = new EventEmitter()

  myInput: string;

  constructor() {
    console.log('Hello SearchbarComponent Component');
    this.myInput = '';
  }

  onInput(event)
  {
    this.inputserach.emit(this.myInput)
  }
}
