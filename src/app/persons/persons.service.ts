import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personChanged = new Subject<string[]>();

  persons: string[] = ['dinesh', 'ashwin', 'babu', 'ashok'];

  constructor(
    private http: HttpClient
  ) { }

  addPerson(name: string) {
    this.persons.push(name);
    this.personChanged.next(this.persons);
  }

  fetchPerson() {
    this.http.get<any>('https://swapi.co/api/people')
      .pipe(
        map(
          respondata => {
            return respondata.results.map(
              character => console.log(character.name)
            );
          }
        )
      )
      .subscribe(
        transformeddata => {
          console.log(transformeddata);
        }
      );
  }

  removePerson(name: String) {
    this.persons = this.persons.filter(
      person => {
        return person != name;
      }
    )
    this.personChanged.next(this.persons);
    console.log(this.persons);

  }
}
