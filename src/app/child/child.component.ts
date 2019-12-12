import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: [
    'childProperty',
    'childProperty:childAlias'
  ],
  outputs: [
    'childEvent'
  ]
})
export class ChildComponent implements OnInit {

  @Input('childAlias') childProperty: string;
  // @Input() childProperty: string;
  @Output() childEvent = new EventEmitter();

  // childProperty: string;
  // childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string) {
    this.childEvent.emit(value);
  }

}
