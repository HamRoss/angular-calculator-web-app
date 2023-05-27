import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() numbersList: string[] = [];
  @Input() operatorsList: string[] = [];
  display: string = '0';
  sum: string | undefined = undefined;

  addNumberToDisplay(number: string) {
    this.sum = undefined;
    if (this.display === '0') {
      this.display = number;
    } else {
      this.display += number;
    }
  }

  addOperatorToDisplay(operator: string) {
    this.display += ` ${operator} `;
  }

  calculateSum() {
    let sumPartStrings = this.display.split(' ');
    const num1 = sumPartStrings[0];
    const operator = sumPartStrings[1];
    const num2 = sumPartStrings[2];

    if (operator === '+') {
      this.sum = String(+num1 + +num2);
    } else if (operator === '-') {
      this.sum = String(+num1 - +num2);
    } else if (operator === '*') {
      this.sum = String(+num1 * +num2);
    } else if (operator === '/') {
      this.sum = String(+num1 / +num2);
    }
    this.display = '0';
  }
}
