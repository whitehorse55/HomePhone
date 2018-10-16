import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CustomheaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customheader',
  templateUrl: 'customheader.html'
})
export class CustomheaderComponent {

  @Output() sendKey : EventEmitter<any> = new EventEmitter()

  @Input()
  set category(category)
  {
    this.title = category
  }

  @Input()
  set type(type)
  {
    this.mytype = type
  }
  // @Input('title') title;

  public title : string
  public mytype : string
  constructor() {
    console.log('Hello CustomheaderComponent Component');
    this.title = '';
    this.mytype = '';
  }

  oninputserach(key)
  {
    this.sendKey.emit(key)
  }
}
