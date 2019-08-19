import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: string[] = ['dinesh', 'ashwin', 'babu', 'ashok'];

  constructor() { }

  addPerson(name: string) {
    this.persons.push(name);
  }
}
