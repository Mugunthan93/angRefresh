import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  interpolation: string = "This is interpolation string";
  imgSrc: string = "https://mdbootstrap.com/img/Others/documentation/img%20(7)-mini.jpg";
  property: string = "this is the property value string";
  numbers: number[] = [1, 2, 3, 4, 5];
  customOutput: string = null;
  parentValue = "Value from parent";

  items = ['item1', 'item2', 'item3', 'item4'];

  parentFunction(newItem: string) {
    this.items.push(newItem);
  }

  getVal() {
    return 3;
  }

  show(lastName: HTMLInputElement) {
    this.customOutput = lastName.value;
  }

}
