import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  @Output() personCreate = new EventEmitter<string>();

  enteredPersonName = '';

  constructor() { }

  ngOnInit() {
  }

  onCreatePerson(personName: string) {
    console.log("person created using local ref!!" + personName);
  }

  onCreatePerson1() {
    console.log("person created using two way bind!!" + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }



}
