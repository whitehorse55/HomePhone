import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CustomitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customitem',
  templateUrl: 'customitem.html'
})
export class CustomitemComponent {

  @Input()
  set data(info)
  {
    this.myinfo = info
  }

  @Input()
  set index(info)
  {
    this.myindex = info
  }

  @Output() clickitem : EventEmitter<any> = new EventEmitter()

  myinfo : any
  myindex : any

  constructor() {
    this.myinfo = {}
    this.myindex = 0
    console.log('Hello CustomitemComponent Component');
  }

  onclickitem()
  {
    console.log("this is cliecked")
    this.clickitem.emit(this.myindex)
  }

}
