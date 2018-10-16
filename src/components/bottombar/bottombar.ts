import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the BottombarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bottombar',
  templateUrl: 'bottombar.html'
})
export class BottombarComponent {

  @Output() clickBack : EventEmitter<any>= new EventEmitter()
  constructor() {
  }

  onclickbackbutton()
  {
    this.clickBack.emit('back')
  }
}
